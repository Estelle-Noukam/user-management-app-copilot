# 🟦 2) README — *User Management App (Gemini)*

```markdown
# 👥 User Management App — Gemini Version

Application de gestion des utilisateurs générée avec Gemini, incluant :

- Création d’utilisateurs
- Authentification
- Mise à jour du profil
- Suppression de compte
- API REST structurée

## 🏗️ Technologies

- Node.js / Express
- PostgreSQL
- JWT Authentication
- Docker (optionnel)

## ▶️ Installation

```bash
npm install
npm start
🌐 Accès API
Base URL : http://localhost:4000/api/users

🔐 Endpoints principaux
Méthode	Route	Description
POST	/register	Créer un utilisateur
POST	/login	Authentification
GET	/me	Profil utilisateur
PUT	/update	Modifier le profil
DELETE	/delete	Supprimer le compte


📦 Variables d’environnement
Créer .env :

Code
DATABASE_URL=postgres://postgres:password@localhost:5432/userdb
JWT_SECRET=your_secret
