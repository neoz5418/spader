from ecloudsdkcore.config.config import Config
from ecloudsdkecs.v1.model import VmlistServerRespQuery, VmlistServerRespRequest
from ecloudsdkecs.v1.client import Client

if __name__ == "__main__":
    config = Config(
        access_key="4463aa0e73314124bd700e5be9c58040",
        secret_key="5695afe15b0843e9a054ffff1bdd6f33",
        pool_id="CIDC-RP-29",
    )
    client = Client(config)
    query = VmlistServerRespQuery(
        server_types=["VM"],
        product_types=["NORMAL"],
        visible=True,
        query_word_name="pending-instance",
        specs_name="g3v.2xlarge.8",
    )
    request = VmlistServerRespRequest(vmlist_server_resp_query=query)
    response = client.vmlist_server_resp(request)
    print(response)
