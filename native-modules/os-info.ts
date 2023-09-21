const os = require("node:os");

const displayInfo = {
	OS: os.platform(),
	"OS Version": os.release(),
	Architecture: os.arch(),
	CPUs: os.cpus().length,
	"Free memory": os.freemem() / 1024 / 1024, // Displayed on Megabytes
	"Total memory": os.totalmem() / 1024 / 1024, // Displayed on Megabytes
	Uptime: os.uptime() / 60 / 60, // Displayed on Hours
};

console.log(`
Información del computador:
------------------------`);

Object.entries(displayInfo).forEach((info) => {
	const [title, value] = info;
	console.log(`${title}:`, value);
});
