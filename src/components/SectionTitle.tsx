type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ className, children }: SectionProps) {
  return (
    <div className="flex grow bg-blue-500 ml-6 px-5 py-2 -skew-x-12">
      <h1 className={`skew-x-12 text-2xl ${className}`}>{children}</h1>
    </div>
  );
}
