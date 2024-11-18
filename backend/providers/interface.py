from dependencies import SessionDep
from routers.types import Instance, Operation, OperationStatus
from abc import ABC, abstractmethod

from services.common import utcnow


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

    @staticmethod
    async def set_operation_failed(session: SessionDep, operation: Operation):
        await operation.update(
            session,
            {
                "status": OperationStatus.failed,
                "progress": 100,
                "end_time": utcnow(),
            },
        )

    @staticmethod
    async def set_operation_running(session: SessionDep, operation: Operation):
        await operation.update(
            session,
            {
                "status": OperationStatus.running,
                "progress": 10,
                "start_time": utcnow(),
            },
        )

    @staticmethod
    async def set_operation_done(session: SessionDep, operation: Operation):
        await operation.update(
            session,
            {
                "status": OperationStatus.done,
                "progress": 100,
                "end_time": utcnow(),
            },
        )
