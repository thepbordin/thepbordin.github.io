interface LayoutProps {
  children: React.ReactNode;
}
export default function DefaultLayout({ children }: LayoutProps) {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:px-8">
        {children}
      </div>
    </>
  );
}
