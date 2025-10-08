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

- Pourquoi est-il utile de tester sur plusieurs versions de Node.js ?


C'est utile car dans une entreprise nous n'avons pas toujours les mêmes versions
- Que se passe-t-il si le code échoue sur une version spécifique ?


Il met une erreur dans Actions, comme quoi cela n'a pas fonctionné

- Pourquoi ce workflow ne s’exécute-t-il que sur `main` ?

C'est pour ne pas tester chaque branche mais uniquement main, la principale de tout les projets car souvent la version final rendue
- Quelles étapes ajouterais-tu pour déployer via SSH ?


Créer une connexion SSH manuellement avec la machine virtuel puis par la suite ajouter dans la run la connection automatique au SSH
