import React from 'react';

function Footer() {
    return ( 
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Về Chúng Tôi</h3>
                    <p style={styles.text}>Giáo dục thời đại</p>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Liên Hệ</h3>
                    <p style={styles.text}>Email: contact@newspaper.com</p>
                    <p style={styles.text}>Điện thoại: +84 123 456 789</p>
                </div>
                <div style={styles.section}>
                    <h3 style={styles.heading}>Theo Dõi Chúng Tôi</h3>
                    <p style={styles.text}>
                        <a href="https://facebook.com" style={styles.link}>Facebook</a> | 
                        <a href="https://twitter.com" style={styles.link}>Twitter</a> | 
                        <a href="https://instagram.com" style={styles.link}>Instagram</a>
                    </p>
                </div>
            </div>
            <div style={styles.bottomBar}>
                <p style={styles.bottomText}>© 2024 Giáo dục thời đại. All rights reserved.</p>
            </div>
        </footer>
     );
}

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    section: {
        flex: '1',
        padding: '0 20px',
    },
    heading: {
        fontSize: '18px',
        marginBottom: '10px',
    },
    text: {
        fontSize: '14px',
        lineHeight: '1.5',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 5px',
    },
    bottomBar: {
        marginTop: '20px',
        borderTop: '1px solid #444',
        paddingTop: '10px',
    },
    bottomText: {
        fontSize: '12px',
    }
};

export default Footer;
