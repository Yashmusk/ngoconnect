// const fs = require("fs");
// const pg = require("pg");
import pg from "pg";
// const url = require("url");

const config = {
  user: "avnadmin",
  password: "AVNS_NWziS8xqcX2-hWnwnly",
  host: "pg-107f7079-agarwalyash541-f3e9.i.aivencloud.com",
  port: 11251,
  database: "defaultdb",
  ssl: {
    rejectUnauthorized: true,
    ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIULhu4nU+/FJTFS8f9Ln+fekZerbswDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvZjQ3NWJiYzctZmVjOS00Y2RiLWEyODAtODFkMTQ0N2Q4
MzEwIFByb2plY3QgQ0EwHhcNMjQxMDIwMTE0MjE3WhcNMzQxMDE4MTE0MjE3WjA6
MTgwNgYDVQQDDC9mNDc1YmJjNy1mZWM5LTRjZGItYTI4MC04MWQxNDQ3ZDgzMTAg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBANytwAI7
qY/pEMI3sLiwyIu4hhDDGrGFNXPIigDATK/rmyMC73vmdeAuOacO57XcknBLRcfR
w29tnvu01CAyd/k0PHxPZsdtgdW8df6qQ9/ka67YBbYcApcBLVkhvGqZOKzm17rl
NBGQ8kPTlY0amKqLG9TYoZ3PfXrfvkunyBYWV/MeWpA9QAEJM9aBPkzXew7kZRHg
aylPbOcNFqLJgr1mWPBbzWMjqKW8OLeHRLAmDMp4MV1EL+fJsgSoTvxJS8h0SYsI
FxZ6NANfqyGFh86n0EGB/d22tcY+05dtpHb63FA2WHh6nu/Q4sAsNqAliDiEGi6h
4tyJdAGl9g3w0U8k4H0mR9wRGNgW4wrBI8NQu16OrD0DNhC/X0lJ0e1+pZdK8FDl
FMHmNqj3LF1nLtaXaAiV926Oy/eG9A7n6hXGIyzF0h9YUIdw3du1FTRBnan75JXl
y73yNDmlYihHxvs9MWz4WS2TTdTPI8EAqRyIv6KY47WeijFH/Lg0AUhhlQIDAQAB
oz8wPTAdBgNVHQ4EFgQUpopAkmZyknrpdohZgPjgRlXfxtQwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBACktMpI0Tk/1EDlr
dhN1Ovs3zZUlZZMkZxoYcYy6x90GYzJ3kZih32Kzx2U3a6oWMHs2+1GqQlf/sZeI
VN05HrjdTDpYoGy4ka98O/tYVDK3LJBH0YAmnbvBESElc38kyl+dJToWnhsk54ax
dTqP/wSbQYPanh6pZ9ghVjjp46kJQZec1/TWh0gSQ1jplDnYZGp/U3q9k1mn8raA
eELPk9EIyt1wKSFtdWjUyTHjTpBBMucW1mu7zoIgIXLhtAEbsOAoB3SugoUgt/YA
63+vmVldG56+BIWijhDnj0UcaZaoDFbUnALNAXROBJATYJww3zvoVLmZU2xTTRYO
iXxNKpAKK/LCv+M5ERVZN0KK124sxdJf+MlgqR2nn1eRCEFYg9IgG+A7RBDN/c4N
VsyK54PadjqEGGUtqBHtea1j018husMR1TWHkNa/DgOcvdRnBD0ocW/48KsaXfYL
7PRJdL6waSMCdmbM4LEb2qYNaBiSa4eVz7ba3+xwSyFGwwk3Og==
-----END CERTIFICATE-----`,
  },
};

const client = new pg.Pool(config);
// client.connect(function (err) {
//   if (err) throw err;
//   client.query("SELECT VERSION()", [], function (err, result) {
//     if (err) throw err;

//     console.log("db connected: ", result.rows[0].version);
//     client.end(function (err) {
//       if (err) throw err;
//     });
//   });
// });

export { client };
