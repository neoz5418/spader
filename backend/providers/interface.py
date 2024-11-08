from dependencies import SessionDep
from routers.types import Instance, Operation
from abc import ABC, abstractmethod


class ProviderInterface(ABC):
    @staticmethod
    def get_provider(provider_name: str) -> "ProviderInterface":
        match provider_name:
            case "ecloud":
                from providers.ecloud import ProviderEcloud

                return ProviderEcloud()
            case _:
                raise ValueError(f"Unknown provider: {provider_name}")

    @abstractmethod
    async def create_instance(
        self, session: SessionDep, operation: Operation, instance: Instance
    ):
        pass
