"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    port: 3000,
    dbUri: "mongodb://localhost:27017/typescript",
    saltWorkFactor: 10,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
      MIIJJwIBAAKCAgBNiVSWEmuU1Osd2Za3d3rfhBJtdsXtOqxntQ//9PFWOW5xP8Z9
      S7xjYMsqV6WWDXRmTJw3dlGal2SEfjLMjZPp+whaTHeqc5l5SY1CYyhzxxH0M6xb
      v5mxfziltBeURjTydlF+nA5aH7J26P/xPewReXiguj9zgyo+iJRjQHmVbk346b1U
      F0xZwXVcstAuc9PHyPHurHnat6mBHJ3wuXoWRceNNDLh7rGpPS68NjcDxms+7VyM
      T55BCNJ72PZjLBBYJi1qD5PSFYOsVfy84GKmona7fQFemNLcLeIGCMr4eNcaMfUV
      Slu2rQ1joZWPq9b0S8miZVGzuBGSa3tk0+L2W4BAnXENaWqUBCAurkYFmS6QT8o9
      +a1HMNEf2WqwXbotodcLbNoJGW0HfIkf01W5gflLx8VIMBNMpBheIrCw9Ht9ip4p
      SLhkPP77tDSIfN94nIh3z2VjtoIQUoQJoxCSq5xb+wrG7zbRoexr38JFXo/XvDEm
      OsCtgvGvYWFMnE+FEvV0A9aL8toKgNPTA4V8RNSYbCYnnx2hnC5SQ3Y4j0aIP/9g
      dlHNncHEvZctU552nADixJ2jg60fY7bjBm5ifcjUTUn+xzjUlVmrIfyK5z9rEyZ1
      7ooFBBorVHjC/45mdRT+YRYr5NbjcpiA7wKKWjyifAPnPljIkgqCfBjFnwIDAQAB
      AoICAANZblT5QLpyJCHq906/k4g6PU2LNuuTgEUOlj1ZSF+QJYww1BMvhVjJop0W
      oimENUYCAzGGI+pIpefvR6R8bSpLVMYJzZWIXtXVbouymtm9fLIO1WA1O59mPn0x
      9V7LVZgvsj+E4D3WZrAqSnwST7NFiwduZDVKMjX3UmmjLF1fIXEiL7KFOyAZckdp
      1gJbsIdNz92eh7kB/Al+wffXG0YBB6i624PU+smzweQRd3jrRlC2kivheJWYmvcM
      nUAVdDNKmuWc/KazlTeJk1xZWQmXtQdOVBPRCDLIrJ3UHWh0V95i0BJ2XtXaTdzC
      6yIEq0lsSK6CL/BSgDfR+seVO5WakxfI9qA9uJTrNxyyx8p9I9zlo3SmNj0ySdUI
      hTpEfpza3QCDqrdl5dwzr4UQghDJQS1QXQk9hYkV+TDBpI3xlWKmVRXnu8W9Bvks
      shB9htcK4scZ26rgW+uxG4lAD1lVAOpBU/BVJR976T432LBxMrHPGaikzokIyOjW
      tqBwNyfo5QwoEF1njpXj5cuhSkY6z7zh1p6rtxP/6aS1jIwXPtV3+MdJcGztgneg
      Ze8Gkne+QzyrNP74CRATQ1iSRkJRDIkiHxSkxS5lVXnqYLhtqNg6vErPc88wv73U
      FZ5FpJD26PPhCes2c9vdwMYlpPuLSIWRzbubh+9906L9nDwBAoIBAQCYGQjf9S21
      lqPtczmAkPaC5PaMY3GAMhg/GOzhT/OYPH1jS2/YR+ORVU6VQtJ3Cb7ZYw9Dy8En
      naintoTM0CjrAWnYCLb9FCMMqoaYJi3E4oSFK9zZAhTBLKTqmKYMkRlJnTz3gUlO
      lH7tDDQ1VjjBiDu3wXvVd9FdJ4sg4zVY7sEKvUkNbV4hIiLna+KjtA7oi6KG3QJm
      yfHuI+psfvzxSb7P6c5uMFW4mnbHlmpuIjrHGpT3AbUltPl64PUjCJHYKJGvk3n8
      Mo2dUD84FwuWOpbc4z8sFF+dlxX0WOn8HYjG6ohQImfMIzxP8yIa3zHjj5FaN4Ya
      Z7f23a1tBuOfAoIBAQCCgPT/6S6dPK9zirGMblICc7yIUhCYsFFZb+sjTh6McS2I
      nkrEqEui7R83x7n2GiCEx+uIvFgNAE0hKUQODLKGghqYeWR5+DgS4Gu8LnB1UC+G
      3/9eq/IWRIFJbMIe/Tklv+OUvvbK6bQvKIw1Dj/8gjp29yYmD0Wlv93u+bEBCnyX
      AhZs6f7k+vYdRxDroKPKP2cmKs5hIeLz+SsOGnEUF6tu+g6e/VrIivF3Q3VauZr8
      U+h7+8StXJpZvczTf3FmKMoEVCeqk7DQFFc4DwVizvG6sQiqK0Gy7eqeeprGmQ0c
      ldFO6cvW9F688pq+g6I6cgf4LKXAPdXwtTabkt4BAoIBAQCAt9cZ6d2YKvdqUbRd
      SNFGb0zz/IimrD52z7pQ6B/IO5EGAmaSDCzb5u0NRrLlCPtZ8AqQHpTF2RhNbxqu
      Vo/6aoTPznhGb89Fvd8QTmc3k1gBd+B8StWTshuTakJEqltTQF3DPMf0V5mfNU/N
      v71ik8+uMHGDc9ZcVsXYvFB+hfgbBZwYX/FkawZNAbGZRx3C0cFnDw0kPk2fcwfG
      cCXScc2pGT6ZZBB3nUlemb5SnGdP7wAYlnpege0Mf+sVjgAXhiXdCBsZQxM0CiCm
      cGJe7hCUuUDSJh/RN3beBo1mzvvdE8juwF9FlKBLLQE06qTG585kIk88c4BtzKcj
      eMwTAoIBAGAO6cdAbRZBp+dFDEEQpv61D+3Lcfnhtk89qPc4thWr7NclpGUyd1H6
      dcMKGSBDxPHXcdAYyjrvoNYq2LP6tqF5PHhEyidZBHUoiURfbll7ZzBAymh16eBo
      Fj3kdtJ2k0zs/GftVByxfvZDQ0h+L6z+cmhErOjQzvQc0Q/o7FeWz3QbjkQmzH7h
      Fq0gNR0rBcSFfLhEQ9qNJc9s9TsRTXB7p60tE/wFAoCgfPHLTqM0ARd/75zrCa6N
      ffNWWGDI6sBGf8RF6ViOE1Rl1Hkn3VAIgTdovbb71gUNSGfUWP6bg2IqCIGsZ2TW
      RLGRZUOcAppAews6Wdqx6TqfOA21QgECggEAf7aMgUGqNVqh/wBEg66yRQuoS5t+
      /jdorhnMrhHWZND+JgZ8mGOfZMJUAshvrX1ZLcbfIj1MvgAlucmPeTu8/yQplSCl
      +Ji29RbD7SHHQDU9VtebM6cU2wQBEL0ORj+IDzFvVTRqPK7r/TE6s+3yYQ2jad7f
      ZmJacAfk91h8IrTqQHJNZnydkvhbxxZyShDxc3F/TFbkBTAx61oweMf+TRcWBajS
      aBL+BAItbVA6k0ApKw3yZAmicnfrxVDTNV/x2oTwkJ/nbJ2nVvJF69Qf2EgNxc2e
      q0vRqCY5Z2GFR3ZKiE/uaYKbK0iJnpDhYS8w6CCK2K/OBYzdfmf54QLL/A==
      -----END RSA PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
      MIICITANBgkqhkiG9w0BAQEFAAOCAg4AMIICCQKCAgBNiVSWEmuU1Osd2Za3d3rf
      hBJtdsXtOqxntQ//9PFWOW5xP8Z9S7xjYMsqV6WWDXRmTJw3dlGal2SEfjLMjZPp
      +whaTHeqc5l5SY1CYyhzxxH0M6xbv5mxfziltBeURjTydlF+nA5aH7J26P/xPewR
      eXiguj9zgyo+iJRjQHmVbk346b1UF0xZwXVcstAuc9PHyPHurHnat6mBHJ3wuXoW
      RceNNDLh7rGpPS68NjcDxms+7VyMT55BCNJ72PZjLBBYJi1qD5PSFYOsVfy84GKm
      ona7fQFemNLcLeIGCMr4eNcaMfUVSlu2rQ1joZWPq9b0S8miZVGzuBGSa3tk0+L2
      W4BAnXENaWqUBCAurkYFmS6QT8o9+a1HMNEf2WqwXbotodcLbNoJGW0HfIkf01W5
      gflLx8VIMBNMpBheIrCw9Ht9ip4pSLhkPP77tDSIfN94nIh3z2VjtoIQUoQJoxCS
      q5xb+wrG7zbRoexr38JFXo/XvDEmOsCtgvGvYWFMnE+FEvV0A9aL8toKgNPTA4V8
      RNSYbCYnnx2hnC5SQ3Y4j0aIP/9gdlHNncHEvZctU552nADixJ2jg60fY7bjBm5i
      fcjUTUn+xzjUlVmrIfyK5z9rEyZ17ooFBBorVHjC/45mdRT+YRYr5NbjcpiA7wKK
      WjyifAPnPljIkgqCfBjFnwIDAQAB
      -----END PUBLIC KEY-----`
};
exports.default = data;
