const Footer = () => {
  return (
    <footer className="mt-16 bg-black/40 backdrop-blur-md text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-3">
        <p className="text-lg font-semibold">
          भगवद्गीता – The Song of the Divine
        </p>

        <p className="text-sm opacity-80">
          A humble tribute to the timeless wisdom of the Gita.
        </p>

        <p className="text-xs opacity-60 mt-4">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
