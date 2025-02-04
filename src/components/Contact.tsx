const Contact = () => {
  return (
    <div className="mt-6">
      <h2 className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 bg-clip-text text-transparent text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
        Contact Me
      </h2>
      <p className="text-gray-100 text-sm sm:text-base md:text-md lg:text-lg mt-2 text-center max-w-3xl mx-auto md:text-left md:mx-0">
        Feel free to reach out by filling out the form below.
      </p>
      <div className="mt-6 max-w-md mx-auto bg-black border border-white p-6 rounded-lg">
        <form>
          <div className="mb-4">
            <label className="block text-white dark:text-gray-300 text-md font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              placeholder="Enter your name..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white dark:text-gray-300 text-md font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              placeholder="Enter your email..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white dark:text-gray-300 text-md font-bold mb-2" htmlFor="subject">
              Subject:
            </label>
            <select
              id="subject"
              className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              required
            >
              <option value="">Select a subject...</option>
              <option value="collaboration">Collaboration</option>
              <option value="feedback">Feedback</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white dark:text-gray-300 text-md font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300"
              placeholder="Enter your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black px-4 py-2 font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
