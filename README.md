
## Project Objective
Integrate automated **SAST** (Static Application Security Testing) and **SCA & Secret Scanning** (Software Composition Analysis & secrets detection) into the repository workflow on every `push` and `pull_request` to catch vulnerabilities early.

## Security Tools Used
- **Semgrep (`semgrep/semgrep`):** Performs SAST on the source code (`semgrep scan --config auto`).
- **Trivy (`aquasecurity/trivy-action`):** Performs filesystem scanning (`scan-type: fs`) for vulnerabilities and exposed secrets (`scanners: vuln,secret`).

## Scan Results
Both `sast` and `sca-secrets` jobs completed successfully in GitHub Actions.

<!-- Optional: upload your screenshot to the repo and link it here, e.g. ![GitHub Actions Scan Result](screenshot.png) -->

## Findings & Fixes
- **Initial Pipeline Fix:** Updated `aquasecurity/trivy-action` version after the first run failed due to an unavailable version tag (`0.28.0`), restoring a working `sca-secrets` run.
- **Code Review:** Reviewed Semgrep and Trivy outputs across the project files (`ASROBOT.HTML`, `mstyle.css`, `myscripts.js`). *(Update this bullet with any specific code finding you fixed, such as safer DOM handling, or note that no high-severity issues/secrets were reported.)*
