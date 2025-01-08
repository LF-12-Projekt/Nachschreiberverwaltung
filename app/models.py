import SQLAlchemy

db = SQLAlchemy()


# User Model
class User(db.Model):
    __tablename__ = 'accounts'

    name = db.Column(db.String(50), nullable=False)
    role = db.Column(db.String(50), nullable=False)

    def __init__(self, name, role):
        self.name = name
        self.role = role

    def save(self):
        """Save the current user to the database."""
        db.session.add(self)
        db.session.commit()

    @staticmethod
    def find_by_name(username):
        """
        Check if a user exists by their name and return the user and their role.

        Args:
            username (str): The username to search for.

        Returns:
            User: The User object if found, otherwise None.
        """
        return User.query.filter_by(name=username).first()


