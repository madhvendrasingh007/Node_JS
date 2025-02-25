const fs = require("fs");

// ..Sybchronous
// fs.writeFileSync("./03_file.txt", "Hello, World!");

// ..Asynchronous
fs.writeFile("./03_file.txt", "Hello, World!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created successfully!");
  }
}
);

fs.writeFileSync("./03_contac.txt", "Madhvendra Singh: 706212134313221");

const data = fs.readFileSync("./03_contac.txt", "utf-8");
console.log(data);

fs.appendFileSync("./03_contac.txt", `\nHey There\n`);

// fs.cpSync("./03_contac.txt", "./03_contactCopy.txt");
