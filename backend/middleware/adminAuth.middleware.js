const adminAuth = async (req, res, next) => {
    // Check if user exists and is an admin
    if (req.user && req.user.isAdmin) {
        next(); // User is an admin, proceed to the next middleware/controller
    } else {
        // Allow if no admin exists yet (for initial admin registration)
        const User = (await import('../models/user.model.js')).default;
        const adminCount = await User.countDocuments({ isAdmin: true });
        if (adminCount === 0) {
            next();
        } else {
            res.status(403).json({ message: "Not authorized as an admin" }); // 403 Forbidden
        }
    }
};

export { adminAuth };