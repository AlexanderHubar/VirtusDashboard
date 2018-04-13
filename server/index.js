const express = require("express");
const bodyParser = require("body-parser");
const App = express();

const report = {
  year: [125, 256, 251, 65, 15, 200, 105, 153, 133, 155, 161, 59],
  month: [1, 4, 6, 5, 8, 2, 3, 7, 1, 5, 3, 1, 4, 6, 2, 5, 1, 10, 2, 5, 1, 9, 8, 5, 3, 13, 3, 6, 9, 12, 5],
  week: [2, 1, 5, 6, 7, 2, 3]
};

//InboxMessage

const inbox = [
  {
    name: "Michelle Stewart",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "Today, 5:32 PM",
    readed: false,
    img: "/img/MichelleStewart.png"
  },
  {
    name: "Jolene Slater",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "Yesterday, 8:30 PM",
    readed: false,
    img: "/img/JoleneSlater.png"
  },
  {
    name: "Lyan Roach",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "1 April, 0:52 AM",
    readed: true,
    img: "/img/LyanRoach.png"
  },
  {
    name: "Michelle Stewart",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "1 May, 8:01 PM",
    readed: true,
    img: "/img/MichelleStewart.png"
  },
  {
    name: "LyanRoach",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "Today, 5:32 PM",
    readed: true,
    img: "/img/LyanRoach.png"
  },
  {
    name: "Lyan Roach",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.",
    date: "Today, 5:32 PM",
    readed: true,
    img: "/img/LyanRoach.png"
  }
];

const projects = [
  {
    id: 1,
    type: "New website",
    company: "Microsoft",
    price: 1300,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "15 May 2018",
    timeLeft: "10 days left",
    timeSpent: "2 months",
    progress: 30,
    status: "Quened",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 2,
    type: "New website",
    company: "Google",
    price: 3600,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "31 May 2018",
    timeLeft: "Completed",
    timeSpent: "620 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 3,
    type: "New logo",
    company: "Themeforest",
    price: 1200,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "13 April 2018",
    timeLeft: "Completed",
    timeSpent: "46 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 4,
    type: "New website",
    company: "Themeforest",
    price: 1000,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "14 April 2018",
    timeLeft: "Completed",
    timeSpent: "140 hours",
    progress: 0,
    status: "Completed",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 5,
    type: "Landing page",
    company: "Google",
    price: 1500,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "31 May 2018",
    timeLeft: "15 days left",
    timeSpent: "40 hours",
    progress: 10,
    status: "Quened",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 6,
    type: "Landing page",
    company: "Microsoft",
    price: 900,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "10 April 2018",
    timeLeft: "1 year left",
    timeSpent: "70 hours",
    progress: 99,
    status: "Testing",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 7,
    type: "Mobile app",
    company: "Microsoft",
    price: 2700,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "6 May 2018",
    timeLeft: "2 month left",
    timeSpent: "6 hours",
    progress: 46,
    status: "Development",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 8,
    type: "New dashboard",
    company: "Symu.co",
    price: 3200,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "22 April 2018",
    timeLeft: "15 days left",
    timeSpent: "35 hours",
    progress: 50,
    status: "Testing",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 9,
    type: "New logo",
    company: "Microsoft",
    price: 3500,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "19 April 2018",
    timeLeft: "Completed",
    timeSpent: "12 hours",
    progress: 100,
    status: "Completed",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 10,
    type: "New dashboard",
    company: "Symu.co",
    price: 900,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "12 May 2018",
    timeLeft: "30 days left",
    timeSpent: "10 hours",
    progress: 20,
    status: "Quened",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 11,
    type: "New dashboard",
    company: "Symu.co",
    price: 3600,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "4 May 2018",
    timeLeft: "Completed",
    timeSpent: "548 hours",
    progress: 0,
    status: "Completed",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  },
  {
    id: 12,
    type: "Landing page",
    company: "Symu.co",
    price: 4300,
    userImg: "/img/MichelleStewart.png",
    idd: "user3",
    deadline: "30 April 2018",
    timeLeft: "2 month left",
    timeSpent: "56 hours",
    progress: 46,
    status: "Quened",
    assignedName: "Michelle Stewart",
    assignedPosition: "Account"
  },
  {
    id: 13,
    type: "New logo",
    company: "Themeforest",
    price: 1300,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "30 June 2017",
    timeLeft: "3 month left",
    timeSpent: "26 hours",
    progress: 15,
    status: "Design",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 14,
    type: "New logo",
    company: "JCD.pl",
    price: 3500,
    userImg: "/img/ava.png",
    idd: "user1",
    deadline: "13 May 2018",
    timeLeft: "45 days left",
    timeSpent: "15 hours",
    progress: 20,
    status: "Planning",
    assignedName: "Jolene Slater",
    assignedPosition: "Back End Dev"
  },
  {
    id: 15,
    type: "Landing page",
    company: "Google",
    price: 2100,
    userImg: "/img/LyanRoach.png",
    idd: "user4",
    deadline: "22 June 2017",
    timeLeft: "2 month left",
    timeSpent: "6 hours",
    progress: 46,
    status: "Testing",
    assignedName: "Lyan Roach",
    assignedPosition: "UX/UI Desinger"
  },
  {
    id: 16,
    type: "New dashboard",
    company: "Symu.co",
    price: 4300,
    userImg: "/img/DominicLynton.png",
    idd: "user2",
    deadline: "30 April 2018",
    timeLeft: "2 month left",
    timeSpent: "56 hours",
    progress: 0,
    status: "Planning",
    assignedName: "Dominic Lynton",
    assignedPosition: "Front End Dev"
  }
];


//Raport Chart
const raport = [5, 10, 8, 11, 7, 13, 6, 8, 12, 6, 4, 5, 14, 12, 9, 1, 12, 12, 9, 2, 4, 1, 6, 14, 13, 6, 10, 13, 14, 4, 11, 12, 5, 2, 12, 6, 11, 4, 5, 3, 6, 7, 9, 14, 11, 10, 7, 9, 6, 8, 4, 3, 14, 5, 11, 2, 8, 1, 9, 1, 12, 9, 8, 8, 11, 7, 14, 7, 8, 11, 5, 6, 6, 4, 10, 5, 13, 4, 3, 5, 12, 12, 1, 5, 11, 4, 1, 2, 2, 5, 12, 3, 9, 1, 1, 6, 1, 13, 13, 7, 11, 10, 13, 5, 5, 13, 9, 7, 14, 6, 4, 8, 5, 11, 12, 13, 6, 3, 4, 1, 11, 5, 11, 4, 13, 6, 11, 2, 1, 13, 5, 8, 6, 5, 13, 9, 6, 2, 11, 4, 13, 3, 7, 9, 5, 14, 12, 3, 4, 6, 13, 10, 2, 12, 7, 4, 2, 2, 10, 4, 8, 3, 10, 6, 9, 12, 8, 2, 8, 9, 8, 5, 6, 3, 13, 12, 5, 14, 2, 12, 4, 11, 3, 9, 5, 8, 9, 11, 2, 13, 9, 4, 10, 1, 8, 3, 13, 1, 11, 14, 4, 13, 3, 9, 11, 1, 11, 14, 2, 12, 6, 12, 11, 1, 4, 6, 14, 7, 5, 4, 10, 14, 12, 11, 5, 14, 13, 9, 2, 3, 8, 2, 12, 13, 6, 2, 8, 9, 5, 8, 10, 4, 10, 6, 13, 7, 1, 6, 9, 14, 5, 7, 9, 11, 14, 10, 9, 5, 2, 12, 9, 8, 8, 11, 8, 12, 4, 1, 2, 1, 4, 1, 13, 9, 12, 2, 13, 12, 1, 3, 5, 7, 13, 7, 2, 8, 1, 14, 14, 14, 11, 11, 12, 11, 12, 8, 2, 1, 10, 2, 9, 14, 10, 11, 7, 3, 14, 5, 9, 5, 14, 14, 7, 12, 1, 11, 11, 8, 1, 13, 2, 1, 10, 3, 8, 4, 11, 1, 2, 11, 12, 3, 5, 3, 11, 3, 5, 4, 2, 7, 5, 11, 2, 14, 7, 4, 10, 9, 14, 1, 10, 9, 14, 14, 2, 7, 7, 11, 9, 4, 7, 11, 2, 7, 7, 12, 7, 8, 2, 9, 6, 4, 3, 12, 11, 11, 11, 12, 5, 3, 10, 4, 5, 7, 11, 9, 13, 9, 11, 7, 4, 9, 5, 11, 12, 7, 12, 5, 12, 10, 1, 8, 8, 10, 5, 3, 8, 4, 10, 10];


//Raport Table

const table = [
  {
    Campaing: 'Lorem ipsum dolor sit amet tetur',
    Time: '6 days',
    Views: 358000,
    Visitors: 58200,
    CTR: '25%',
    CPC: '$3.02',
    CPV: '$2.51',
    CPM: 28.35,
    Status: 'Active'
  },
  {
    Campaing: 'Sed do eiusmod tempor',
    Time: '7 hours',
    Views: 1200,
    Visitors: 800,
    CTR: '10%',
    CPC: '$8.45',
    CPV: '$6.13',
    CPM: 45.22,
    Status: 'Disable'
  },{
    Campaing: 'Consectetur adipisicing elit sed',
    Time: '3 days',
    Views: 69000,
    Visitors: 7300,
    CTR: '19%',
    CPC: '$6.22',
    CPV: '$3.90',
    CPM: 37.80,
    Status: 'Active'
  }
];

const pieChartYear = [
  views = {
    data: [90, 10],
    num: 49500,
    percent: '90'
  },
  visitors = {
    data: [59, 31],
    num: 9000,
    percent: '59'
  },
  impressions = {
    data: [88, 12],
    num: 66500,
    percent: '88'
  }
];

const pieChartMonth = [
  views = {
    data: [66, 44],
    num: 5800,
    percent: '66'
  },
  visitors = {
    data: [55, 45],
    num: 2600,
    percent: '55'
  },
  impressions = {
    data: [32, 68],
    num: 7200,
    percent: '32'
  }
];

const pieChartWeek = [
  views = {
    data: [73, 27],
    num: 1300,
    percent: '75'
  },
  visitors = {
    data: [31, 69],
    num: 800,
    percent: '35'
  },
  impressions = {
    data: [62, 38],
    num: 3800,
    percent: '62'
  }
];


//login
const userExist = {
  name: "admin",
  pass: "admin"
};

App.use(bodyParser.json());

App.post("/api/user", (req, res) => {
  const name = req.body.login;
  const pass = req.body.pass;

  if (userExist.name === name && userExist.pass === pass) {
    return res.json({
      userCheck: "user exist"
    })
  } else {
    return res.json({
      userCheck: "user does not exist"
    })
  }
});

App.get("/api/user/report/year", (req, res) => {
  return res.json(report.year)
});

App.get("/api/user/report/month", (req, res) => {
  return res.json(report.month)
});

App.get("/api/user/report/week", (req, res) => {
  return res.json(report.week)
});


App.get("/api/user/messages/inbox", (req, res) => {
  return res.json(inbox)
});


App.get("/api/user/projects", (req, res) => {
  return res.json(projects)
});

App.get("/api/user/raport", (req, res) => {
  return res.json(raport)
});

App.get("/api/user/raport/table", (req, res) => {
  return res.json(table)
});

App.get('/api/user/raport/pie/year', (req, res) => {
  return res.json(pieChartYear)
});

App.get('/api/user/raport/pie/month', (req, res) => {
  return res.json(pieChartMonth)
});

App.get('/api/user/raport/pie/week', (req, res) => {
  return res.json(pieChartWeek)
});

App.listen(4000, () => {
  console.log("Server is started!")
});