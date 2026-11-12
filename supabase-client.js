// Initialisation UNIQUE du client Supabase. Remplacez les deux valeurs (Project Settings > API Keys).
// La clé "Publishable" est faite pour le navigateur. N'ajoutez JAMAIS ici une clé secret / service_role.
(function () {
  if (window.sb) return;
  var SUPABASE_URL = 'https://yhjsdpmimqobtcesoblg.supabase.co';
  var SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_5kwBVRLRODjwDKmgNK1uxA_rou4hx9i';
  window.SUPABASE_CONFIGURED = !/VOTRE/.test(SUPABASE_URL + SUPABASE_PUBLISHABLE_KEY);
  if (!window.supabase) { console.error('Bibliothèque supabase-js non chargée.'); return; }
  window.sb = window.SUPABASE_CONFIGURED ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
  if (!window.sb) console.warn('Supabase non configuré : renseignez supabase-client.js (voir SUPABASE.md).');
})();
