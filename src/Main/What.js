import React, { useState, useEffect } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/material';

const What = () => {
    const [showFab, setShowFab] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShowFab(true);
            } else {
                setShowFab(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)', // Centers the Fab vertically
                zIndex: 1000,
                
                outline: 'none !important', // Ensure no outline
                boxShadow: 'none !important', // Ensure no box shadow
                '&:focus': {
                    outline: 'none !important', // Remove focus outline
                    boxShadow: 'none !important', // Remove focus box shadow
                },
                '&:active': {
                    outline: 'none !important', // Remove active outline
                    boxShadow: 'none !important', // Remove active box shadow
                },
                '&:visited': {
                    outline: 'none !important', // Remove visited outline
                    boxShadow: 'none !important', // Remove visited box shadow
                }
            }}
        >
            {showFab && (
                <Box
                    component='p'
                    sx={{
                        backgroundColor: '#25D366',
                        width: { xs: 56, sm: 64, md: 72 },
                        height: { xs: 56, sm: 64, md: 72 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopLeftRadius: '36px',  // Top left corner
                        borderTopRightRadius: '36px', // Top right corner
                        borderBottomLeftRadius: '36px', // Bottom left corner
                        cursor: 'pointer',

                    }}
                    aria-label="whatsapp"
                    style={{ outline: 'none', boxShadow: 'none' }} // Inline style override
                >
                    <WhatsAppIcon
                        sx={{
                            color: "white",
                            width: { xs: 44, sm: 56, md: 64 },
                            height: { xs: 44, sm: 56, md: 64 },
                            p: 0.5,
                            zIndex: 10,
                            outline: 'none !important',
                            boxShadow: 'none !important'
                        }}
                        style={{ outline: 'none', boxShadow: 'none' }} // Inline style override
                    />
                </Box>
            )}
        </Box>
    );
};

export default What;
