import Header from './_components/header/Header';

function layout({ children }: IChildren) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}

export default layout;
