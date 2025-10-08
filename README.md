**Réflexion :**

- Quand la pipeline s’exécute-t-elle ?


Lors du push, la pipeline s'éxecute grâce au ci.yml contenant le on : [push]
- Que fait concrètement la commande `run:` ?


Elle sert à lancer le test, dans le cas actuel, elle ne renvoie qu'un simple message.

- Pourquoi Jest est-il utile dans la CI ?


Parce qu'elle permet à faire des test de code JavaScript
- Que se passe-t-il si un test échoue ?


Cela met une erreur test


- Pourquoi `npm ci` plutôt que `npm install` ?


Car il va installer tout les composants nécessaires pour faire du CI