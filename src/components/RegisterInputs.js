

export const RegisterNameInput = ({ name, setName }) => {
    return (
        <div>
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Name
            </label>
            <input
                type="name"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your name."
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

        </div>
    )
}

export const RegiserEmailInput = ({ email, setEmail }) => {
    return (
        <div>
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Your email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

        </div>
    )
}

export const RegisterPasswordInput = ({ password, setPassword }) => {
    return (
        <div>
            <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Password
            </label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
    )
}

export const RegisterConfirmPasswordInput = ({ confPassword, setConfPassword }) => {
    return (
        <div>
            <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Confirm password
            </label>
            <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
            />
        </div>
    )
}