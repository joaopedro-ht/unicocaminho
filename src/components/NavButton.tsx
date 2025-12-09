interface NavButtonProps {
  href?: string;
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function NavButton({ href, icon, label, active = false, onClick }: NavButtonProps) {
  const baseClasses = "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors";
  const activeClasses = active
    ? "text-white bg-primary"
    : "text-gray-700 hover:bg-gray-100";

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${activeClasses}`}>
        <i className={`${icon} mr-3`}></i>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${activeClasses}`}>
      <i className={`${icon} mr-3`}></i>
      {label}
    </button>
  );
}
