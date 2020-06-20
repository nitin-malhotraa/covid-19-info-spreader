var express = require("express");
var router = express.Router();
const ipInfo = require("ipinfo");
const VisitReportsService = require("../services/visitReports");
const UserService = require("../services/user");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const ipAddress =
    req.headers["ip-address"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress;
  await ipInfo(ipAddress, async (err, data) => {
    if (err) {
      console.log("Error: ", err.message);
    }
    let name = req.query.n || "[Your_NAME]";
    if (ipAddress !== "::1") {
      await VisitReportsService.newReport({
        name,
        ...data
      });
    }
    res.render("index", { name: name });
  });
});

/* POST new user. */
router.post("/user", async (req, res, next) => {
  const ipAddress =
    req.headers["ip-address"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress;
  await ipInfo(ipAddress, async (err, data) => {
    if (err) {
      console.log("Error: ", err.message);
    }
    let name = req.body.name || "[Your_NAME]";
    await UserService.newUser({
      name,
      ...data
    })
      .then(() => {
        return res.json({
          success: true,
          msg: "User created successfully"
        });
      })
      .catch(err => {
        console.log("Error: ", err.message);
        return res.json({
          success: false,
          err: "Something went wrong"
        });
      });
  });
});

module.exports = router;
