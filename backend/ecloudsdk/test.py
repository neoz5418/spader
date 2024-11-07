from ecloudsdkcore.config.config import Config
from ecloudsdkecs.v1.model import VmListServeQuery
from ecloudsdkecs.v1.client import Client

if __name__ == "__main__":
    config = Config(
        access_key="4463aa0e73314124bd700e5be9c58040",
        secret_key="5695afe15b0843e9a054ffff1bdd6f33",
        pool_id="CIDC-RP-29",
    )
    client = Client(config)
    request = VmListServeQuery(
        server_types=["VM"],
        product_types=["NORMAL"],
        visible=True,
    )
    response = client.vm_list_serve(request)
    print(response)
