**Réflexion :**

- Quand la pipeline s’exécute-t-elle ?


Lors du push, la pipeline s'éxecute grâce au ci.yml contenant le on : [push]
- Que fait concrètement la commande `run:` ?


Elle sert à lancer le test, dans le cas actuel, elle ne renvoie qu'un simple message.

- Pourquoi Jest est-il utile dans la CI ?


Parce qu'elle permet à faire des test de code JavaScript
- Que se passe-t-il si un test échoue ?
`
 FAIL  __tests__/index.test.js
  × addition de 2 + 3 = 5 (14 ms)

  ● addition de 2 + 3 = 5

    expect(received).toBe(expected) // Object.is equality

    Expected: 5
    Received: 6

      2 |
      3 | test('addition de 2 + 3 = 5', () => {
    > 4 |   expect(addition(2, 4)).toBe(5);
        |                          ^
      5 | });

      at Object.toBe (__tests__/index.test.js:4:26)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.021 s, estimated 21 s
Ran all test suites.
`


- Pourquoi `npm ci` plutôt que `npm install` ?


Car il va installer tout les composants nécessaires pour faire du CI