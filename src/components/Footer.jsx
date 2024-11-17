import moment from "moment";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between px-4 py-6 mx-auto max-w-7xl md:flex-row bg-prime font-modern xl:max-w-full">
      <p className="text-sm text-center text-secondary md:text-left md:mb-0 mx-auto font-manrope">
        © Copyright {moment().format("YYYY")} por Airaware Team
      </p>
    </footer>
  );
}
