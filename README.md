# Purpose
As a front-end developer at our company, you have been assigned to conduct a code review. Please focus specifically on the component outlined below.

# Task Description:
We aim to develop a basic component that can highlight SQL queries. We plan to use highlight.js for this purpose. The component should:

- Fetch SQL queries through an observable. Initially, this can be mocked to include a SQL query featuring common SQL keywords such as SELECT, INNER JOIN, FROM, UNION, WHERE.
- Highlight these keywords.

Additionally, the component should:

- Support two different display styles:
  - Background color:
    - Default: rgba(231, 234, 243, 0.7)
    - Optional: rgba(15, 61, 201, 0.7)
  - Ensure that margins, padding, and border dimensions are consistent across both display styles.
- Trim the fetched query.
- Maintain the original character size without modification.
