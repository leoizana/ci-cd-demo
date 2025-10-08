**Réflexion :**

- Quand la pipeline s’exécute-t-elle ?
Lors du push, la pipeline s'éxecute grâce au ci.yml contenant le on : [push]
- Que fait concrètement la commande `run:` ?"
Elle sert à lancer le test, dans le cas actuel, elle ne renvoie qu'un simple message.
