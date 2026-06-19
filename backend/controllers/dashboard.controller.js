import Booking from "../models/booking.model.js";
import Tour from "../models/Tour.js";

// GET DASHBOARD STATS (PER TENANT)
  
export const getDashboardStats = async (req, res) => {
  try {
    const tenantId = req.tenantId;

    // 1. Total bookings
    const totalBookings = await Booking.countDocuments({ tenantId });

    // 2. Revenue
    const revenueAgg = await Booking.aggregate([
      { $match: { tenantId } },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" }
        }
      }
    ]);

    const totalRevenue = revenueAgg[0]?.totalRevenue || 0;

    // 3. Latest bookings
    const latestBookings = await Booking.find({ tenantId })
      .sort({ createdAt: -1 })
      .limit(5);

    // 4. Top tours (by bookings count)
    const topTours = await Booking.aggregate([
      { $match: { tenantId } },
      {
        $group: {
          _id: "$tourId",
          bookingsCount: { $sum: 1 }
        }
      },
      { $sort: { bookingsCount: -1 } },
      { $limit: 5 }
    ]);

    res.json({
      success: true,
      data: {
        totalBookings,
        totalRevenue,
        latestBookings,
        topTours
      }
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};