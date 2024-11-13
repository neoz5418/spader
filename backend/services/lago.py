from uuid import UUID

from lago_python_client import Client
from lago_python_client.exceptions import LagoApiError
from lago_python_client.models.event import Event
from lago_python_client.models.customer import Customer
from lago_python_client.models.wallet import Wallet
from lago_python_client.models.wallet_transaction import WalletTransaction
from lago_python_client.models.subscription import Subscription
from routers.types import ResourceUsageRecord, Workspace, WorkspaceAccount
from settings import get_settings

client = Client(api_key=get_settings().lago_key, api_url=get_settings().lago_host)


def get_wallet(workspace: Workspace) -> Wallet:
    wallets = client.wallets.find_all(
        options={"external_customer_id": str(workspace.uid)}
    ).get("wallets")
    if len(wallets) == 0:
        wallet = client.wallets.create(
            Wallet(
                external_customer_id=str(workspace.uid),
                currency="CNY",
                rate_amount=1,
            )
        )
    else:
        wallet = wallets[0]
    return wallet


def get_account(workspace: Workspace) -> WorkspaceAccount:
    try:
        customer = client.customers.find(str(workspace.uid))
    except LagoApiError as error:
        if error.status_code == 404:
            customer = None
        else:
            raise error
    if customer is None:
        client.customers.create(
            Customer(
                external_id=str(workspace.uid),
                name=workspace.name,
                currency="CNY",
            )
        )
    wallet = get_wallet(workspace)
    subscriptions = client.subscriptions.find_all(
        options={"external_customer_id": str(workspace.uid)}
    ).get("subscriptions")
    if len(subscriptions) == 0:
        client.subscriptions.create(
            Subscription(
                plan_code="pre_paid",
                external_customer_id=str(workspace.uid),
                external_id=str(workspace.uid),
            )
        )
    return WorkspaceAccount(
        workspace=workspace.name,
        balance=wallet.balance_cents,
        currency=wallet.currency,
    )


# TODO: add transaction and invoice status check
def top_up_account(workspace: Workspace, amount: int, free: bool) -> None:
    wallet = get_wallet(workspace)
    wallet_transaction = WalletTransaction(
        wallet_id=wallet.lago_id,
    )
    if free:
        wallet_transaction.granted_credits = str(amount)
    else:
        wallet_transaction.paid_credits = str(amount)

    result = client.wallet_transactions.create(wallet_transaction)
    print(result)


def send_event(
    resource_usage_record: ResourceUsageRecord,
    workspace_id: UUID,
    gpu_type: str,
    hours: str,
) -> None:
    client.events.create(
        Event(
            transaction_id=str(resource_usage_record.uid),
            external_subscription_id=str(workspace_id),
            code="compute",
            timestamp=resource_usage_record.end_time.timestamp(),
            properties={
                "hours": hours,
                "name": gpu_type,
            },
        )
    )


if __name__ == "__main__":
    # test in cli
    for ws in [1, 11, 12, 13]:
        print(get_account(Workspace(uid=ws, name="test")))
        top_up_account(Workspace(uid=ws, name="test"), 11, True)
        top_up_account(Workspace(uid=ws, name="test"), 13, False)
        print(get_account(Workspace(uid=ws, name="test")))
