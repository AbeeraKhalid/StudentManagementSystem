import inquirer from "inquirer";
import chalk from "chalk";
const randomNo = Math.floor(10000 + Math.random() * 80000); //STUDENTID
// console.log(randomNo)
let mymoneyBalance = 0;
let ans = await inquirer.prompt([
    {
        name: "Students",
        type: "input",
        message: "Enter Student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Write name in a non empty value";
        },
    },
    {
        name: "Institute",
        type: "list",
        message: "Select Academy name",
        choices: [
            "Digiskills",
            "PIAIC",
            "GIAIC",
            "Sir Syed Computer Institute",
            "Aptech",
            "TheProtecProfessionalTrainingInstitute",
            "Enablers",
        ],
    },
    {
        name: "courses",
        type: "list",
        message: "Select your favourite course for enrollment",
        choices: [
            "GraphicDesign",
            "VirtualAssistance",
            "WordPress",
            "SEO",
            "ArtificialIntelligence(AI)",
            "CloudNativeComputing",
            "QuickBook",
            "DigitalLitracy",
            "ComputerProgrammingLanguage",
            "Freelancing",
        ],
    },
]);
const coursetuitionfees = {
    GraphicDesign: 5000,
    VirtualAssistance: 7000,
    WordPress: 7500,
    SEO: 6500,
    ArtificialIntelligenceAI: 25000,
    CloudNativeComputing: 20000,
    QuickBook: 6000,
    DigitalLitracy: 5000,
    ComputerProgrammingLanguage: 9000,
    Freelancing: 7900,
};
console.log(`\nTuitionfees:${coursetuitionfees[ans.courses]}/-\n`);
console.log(`CurrentBalance${mymoneyBalance}\n`);
let paymenttypes = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select your payment method:",
        choices: ["BankTransfer", "Easypaisa", "Jazzcash", "Payoneer"],
    },
    {
        name: "Amount",
        type: "input",
        message: "Transfer money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a non-empty value.";
        },
    },
]);
console.log(`You select ${paymenttypes.payment}payment method \n`);
const Tuitionfees = coursetuitionfees[ans.courses];
const paymentAmount = parseFloat(paymenttypes.Amount);
if (Tuitionfees == paymentAmount) {
    console.log(`You have successfully enrolled in ${ans.courses}.\n`);
    let Answer = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message: "What would you like to choose next?",
            choices: ["View Current Status", "Exit"],
        },
    ]);
    if (Answer.Select === "View Current Status") {
        console.log(chalk.redBright.italic("\n\t\t<<<***STATUS***>>>\t\n"));
        console.log(chalk.cyanBright.italic(`StudentName:${ans.Students}`));
        console.log(chalk.cyanBright.italic(`StudentID: ${randomNo}`));
        console.log(chalk.cyanBright.italic(`Institute/Academy Name: ${ans.Institute}`));
        console.log(chalk.blueBright.italic(`Course: ${ans.courses}`));
        console.log(chalk.blueBright.italic(`Tuition fees Paid: ${paymentAmount}`));
        console.log(chalk.blueBright.italic(`Balance: ${mymoneyBalance += paymentAmount}`));
    }
    else {
        console.log(chalk.magentaBright("\nStudentManagementSystem is End\n"));
    }
}
else {
    console.log("Invalid Amount to enrolled in course\n");
}
