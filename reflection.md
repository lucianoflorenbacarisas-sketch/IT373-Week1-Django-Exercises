Setting up the development environment for Django was a valuable learning experience. At first, I encountered a few challenges that slowed me down. One major issue was related to activating the virtual environment in PowerShell on Windows — it gave me a script execution policy error. I resolved this by adjusting the policy temporarily using the command Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass. After that, the .venv activated successfully.

Another minor issue was forgetting to use python -m pip install --upgrade pip inside the virtual environment, which led to an outdated pip version warning. Upgrading pip fixed the issue. Installing Django and verifying its version went smoothly afterward.

I also struggled a bit with the folder structure and remembering to run django-admin startproject config . with the dot at the end — without it, Django created an extra folder which was not what we wanted. Once I corrected that, the server ran correctly, and I was able to view the welcome page in the browser.

Setting up Git was straightforward as I had prior experience. I created a private GitHub repo, initialized Git in my local project, committed the files, and pushed to the remote repo.

Overall, the setup taught me the importance of carefully reading instructions, using the correct shell commands based on the OS, and troubleshooting small but important setup errors.
