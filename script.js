$("#gen").on("click", function () {
  const kosuu = $("#kosuu").val();
  const result = $("#generated");
  if (isNaN(Number(kosuu))) {
    result.text("Invalid Number");
    return;
  }
  const paypays = [];
  for (let i = 0; i < Number(kosuu); i++) {
    const rand = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890".split("");
    const random = [];
    for (let i = 0; i < 24; i++) random.push(Math.floor(Math.random() * rand.length))
    const moji = random.map(x => rand[x]).join("")
    paypays.push(`<a href="https://promos.discord.gg/${moji}">https://promos.discord.gg/${moji}</a>`);
  };
  result.html(paypays.join("<br />"))
})
