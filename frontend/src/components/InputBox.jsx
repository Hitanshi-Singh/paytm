/* eslint-disable react/prop-types */
const InputBox = ({ label, placeholder, onChange }) => {
  return (
    <div className="my-2 w-full">
      <label
        htmlFor="company"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-full"
      >
        {label}
      </label>
      <input
        type="text"
        id="company"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
