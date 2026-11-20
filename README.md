# Kartoi CRM

Reemplazo de HubSpot Starter. Página estática (`index.html` + `config.js`, sin build) sobre el Supabase de `kartoi-leads`.

- **Backend:** tablas `companies`, `contacts`, `deals`, `interactions` (actividad), `tasks`, `pipeline_stages`, `crm_users` — migración `../kartoi-leads/database/migrations/002_crm.sql`. RLS: solo correos activos en `crm_users`; borrar empresas y editar etapas/blacklist = rol admin. Triggers: negocio ganado → cuenta `cliente`; blacklist bloquea negocios; actividad actualiza `ultima_actividad` y pasa prospectos a `en_contacto`.
- **Login:** Supabase Auth por correo (enlace + código), sin registro abierto.
- **Scripts** (en `../kartoi-leads/`, solo stdlib): `hubspot_export.py` (respaldo API), `hubspot_load.py` (carga idempotente), `crm_usuarios.py` (alta/baja).
- **Deploy:** GitHub Pages (`git push`). Probar local: servir esta carpeta con `python3 -m http.server`.
- Migración paso a paso: [MIGRACION_HUBSPOT.md](MIGRACION_HUBSPOT.md).
