const express = require("express");
const app = express();

app.use(express.json());

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const odd = [];
    const even= [];
    const alphabets = [];
    

    for (const item of data) {
      if (!isNaN(item)) {
        if((item)%2==0){
          odd.push(item);
        }else{
          even.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
      }
    }

    res.json({
      is_success: true,
      user_id: "Vansh_110203",
      email: "vansh2124.be21@chitkara.edu.in",
      roll_number: "2110992124",
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alphabets,
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
