# 1. Use Cypress base image with Node.js and all supported browsers preinstalled
FROM cypress/included:14.3.2

# 2. Install Java runtime (required for Allure to work)
USER root
RUN apt-get update && apt-get install -y default-jre && rm -rf /var/lib/apt/lists/*

# 3. Install Allure CLI globally for report generation
RUN npm install -g allure-commandline --allow-root

# 4. Set working directory and install project dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

# 5. Default command:
# - Run Cypress tests
# - Generate Allure report in single-file mode
#
# Note:
# All Cypress environment variables (e.g. envName, passwords, tags) are passed
# from the GitHub Actions workflow using Docker `-e` flags.
#
# `|| true` prevents the container from exiting early if Cypress tests fail,
# allowing Allure to still generate the report.
ENTRYPOINT ["bash", "-lc"]
CMD ["npx cypress run || true && npx allure generate --single-file --clean -o allure-report allure-results"]
