"use client";
import { MdLibraryBooks } from "react-icons/md"; // Import icon
import { HiPencilAlt } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { getAnalytics } from "@/actions/analytics";
import { getMoodById, getMoodTrend } from "@/app/lib/moods";
import { format, parseISO } from "date-fns";
import useFetch from "@/hooks/use-fetch";
import MoodAnalyticsSkeleton from "./analytics-loading";
import { useUser } from "@clerk/nextjs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const timeOptions = [
  { value: "7d", label: "Last 7 Days" },
  { value: "15d", label: "Last 15 Days" },
  { value: "30d", label: "Last 30 Days" },
];

const MoodAnalytics = () => {
  const [period, setPeriod] = useState("7d");

  const {
    loading,
    data: analytics,
    fn: fetchAnalytics,
  } = useFetch(getAnalytics);

  const { isLoaded } = useUser();

  useEffect(() => {
    fetchAnalytics(period);
  }, [period]);

  if (loading || !analytics?.data || !isLoaded) {
    return <MoodAnalyticsSkeleton />;
  }

  if (!analytics) return null;

  const { timeline, stats } = analytics.data;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-white p-4 border rounded-lg shadow-lg">
          <p className="font-medium">
            {format(parseISO(label), "MMM d, yyyy")}
          </p>
          <p className="text-orange-600">Average Mood: {payload[0].value}</p>
          <p className="text-blue-600">Entries: {payload[1].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-bold gradient-title">Dashboard</h2>

        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {timeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {analytics.data.entries.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-10 border border-gray-300 rounded-xl shadow-2xl bg-gradient-to-b from-gray-50 to-gray-100">
          {/* 📖 Stylish Icon */}
          <MdLibraryBooks className="text-6xl text-orange-500 mb-4 drop-shadow-md" />

          {/* 📝 Main Message */}
          <p className="text-3xl font-extrabold text-gray-900 tracking-wide">
            No Entries Found
          </p>

          {/* 📌 Subtitle with Better Readability */}
          <p className="text-lg text-gray-700 mt-2">
            Your journal is waiting! Start writing your thoughts today.
          </p>

          {/* ✍️ Call-to-Action Button with Glow Effect */}
          <Link
            href="/journal/write"
            className="mt-5 px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition-all flex items-center gap-2"
          >
            <HiPencilAlt className="text-2xl" /> {/* ✏️ Writing Icon */}
            Write a New Entry
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Entries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalEntries}</div>
                <p className="text-xs text-muted-foreground">
                  ~{stats.dailyAverage} entries per day
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Mood
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.averageScore}/10
                </div>
                <p className="text-xs text-muted-foreground">
                  Overall mood score
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Mood Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center gap-2">
                  {getMoodById(stats.mostFrequentMood)?.emoji}{" "}
                  {getMoodTrend(stats.averageScore)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mood Timeline Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Mood Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={timeline}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(date) => format(parseISO(date), "MMM d")}
                    />
                    <YAxis yAxisId="left" domain={[0, 10]} />
                    <YAxis
                      yAxisId="right"
                      orientation="right"
                      domain={[0, "auto"]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      yAxisId="left"
                      type="monotone"
                      dataKey="averageScore"
                      stroke="#f97316"
                      name="Average Mood"
                      strokeWidth={2}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="entryCount"
                      stroke="#3b82f6"
                      name="Number of Entries"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default MoodAnalytics;
