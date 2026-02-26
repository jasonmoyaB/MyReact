"""adding pets table

Revision ID: 96651f74601a
Revises: e5ae585e7040
Create Date: 2026-02-25 17:04:45.243814

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '96651f74601a'
down_revision: Union[str, Sequence[str], None] = 'e5ae585e7040'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        'pets',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(length=50), nullable=False),
        sa.Column('owner_id', sa.Integer, nullable=False)
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_table('pets')
