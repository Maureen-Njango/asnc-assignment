

  
async function delayTime(message,time){
    await new Promise(resolve => setTimeout(resolve, delayTime));
    console.log(message);
  }
  delayTime("I love Audi",5000)
  const userIds = [1, 2, 3, 4, 5]; // Array of user IDs

const getUserData = async (id) => {
    return new Promise((resolve, reject) => {
        // Simulating fetching user data asynchronously
        setTimeout(() => {
            resolve(`User data for ID ${id}`); // Resolve with user data
        }, Math.random() * 1000); // Random delay to simulate asynchronous behavior
    });
};

const fetchAndLogUserData = async () => {
    for (const id of userIds) {
        try {
            const userData = await getUserData(id);
            console.log(userData); // Log the user data
        } catch (error) {
            console.error(`Error fetching data for ID ${id}: ${error}`);
        }
    }
};

fetchAndLogUserData();


function performTaskTask() {
    performTask()
        .then(() => {
            console.log("Custom success message: Task completed successfully");
        })
        .catch((error) => {
            console.error("Custom error message:", error);
        });
}

performTask();

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        if (randomNum > failureProbability) {
            resolve(`Task ${taskName} succeeded.`);
        } else {
            reject(`Task ${taskName} failed.`);
        }
    });
}

function executeWithRetry(taskName, retries, failureProbability) {
    let attempts = 0;

    const tryTask = () => {
        unstableTask(taskName, failureProbability)
            .then((message) => {
                console.log(message);
            })
            .catch((error) => {
                attempts++;
                console.log(error);
                if (attempts < retries) {
                    tryTask();
                } else {
                    console.log(`All ${retries} attempts for task ${taskName} exhausted.`);
                }
            });
    };

    tryTask();
}

// Example usage
executeWithRetry("Example Task", 3, 0.3);
  