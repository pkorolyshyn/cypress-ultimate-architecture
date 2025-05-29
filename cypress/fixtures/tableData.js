// ✅ tableData is an example of how to store reusable test data for assertions.
//
// Why this exists:
// - Many tests rely on consistent data to verify UI elements (e.g. table rows, headers, dropdowns).
// - Instead of repeating arrays in every test, you can define them once and import as needed.
//
// This approach keeps your tests clean, avoids duplication, and makes updates easier if the data changes.

const tableData = {
  firstNames: [
    'Mark',
    'Larry',
    'John',
    'Ann',
    'Sevan',
    'Ruben',
    'Mark',
    'Haik',
    'Garegin',
    'Francisca',
  ],
  headers: ['Actions', 'ID', 'First Name', 'Last Name', 'Username', 'E-mail', 'Age'],
};

export default tableData;
