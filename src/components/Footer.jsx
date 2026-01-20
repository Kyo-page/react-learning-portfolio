export const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>
                        &copy; {new Date().getFullYear()} Kyo
                    </p>
                </aside>
            </footer>
        </>
    );
};