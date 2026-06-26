namespace SyncfusionBlazorApp.Models
{
    public class OrdersDetails
    {
        // Static list to hold order data.
        public static List<OrdersDetails> order = new List<OrdersDetails>();
 
        // Default constructor.
        public OrdersDetails() { }
 
        // Parameterized constructor to initialize order details.
        public OrdersDetails(int TaskID, string TaskName, DateTime StartDate, DateTime EndDate, string Duration, int Progress, int? ParentID)
        {
            this.TaskID = TaskID;
            this.TaskName = TaskName;
            this.StartDate = StartDate;
            this.EndDate = EndDate;
            this.Duration = Duration;
            this.Progress = Progress;
            this.ParentID = ParentID;
        }

        // Method to generate sample order records.
        public static List<OrdersDetails> GetAllRecords()
        {
            List<OrdersDetails> Tasks = new List<OrdersDetails>()
            {
                new OrdersDetails() { TaskID = 1, TaskName = "Project initiation", StartDate = new DateTime(2022, 01, 04), EndDate = new DateTime(2022, 01, 7), },
                new OrdersDetails() { TaskID = 2, TaskName = "Identify Site location", StartDate = new DateTime(2022, 01, 04), Duration = "0", Progress = 30, ParentID = 1, },
                new OrdersDetails() { TaskID = 3, TaskName = "Perform soil test", StartDate = new DateTime(2022, 01, 04), Duration = "4", Progress = 40, ParentID = 1, },
                new OrdersDetails() { TaskID = 4, TaskName = "Soil test approval", StartDate = new DateTime(2022, 01, 04), Duration = "0", Progress = 30, ParentID = 1, },
                new OrdersDetails() { TaskID = 5, TaskName = "Project estimation", StartDate = new DateTime(2022, 01, 04), EndDate = new DateTime(2022, 01, 10), },
                new OrdersDetails() { TaskID = 6, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2022, 01, 06), Duration = "3", Progress = 30, ParentID = 5, },
                new OrdersDetails() { TaskID = 7, TaskName = "List materials", StartDate = new DateTime(2022, 01, 06), Duration = "3", Progress = 40, ParentID = 5, },
                new OrdersDetails() { TaskID = 8, TaskName = "Estimation approval", StartDate = new DateTime(2022, 01, 06), Duration = "0", Progress = 30, ParentID = 5, }
            };
            Tasks = new List<OrdersDetails>() { };
            return Tasks;
        }

        public static List<OrdersDetails> GetRecords()
        {
            List<OrdersDetails> Tasks = new List<OrdersDetails>()
            {
                new OrdersDetails() { TaskID = 1, projectRef = 1, TaskName = "Project initiation", StartDate = new DateTime(2022, 01, 04), EndDate = new DateTime(2022, 01, 7), },
                new OrdersDetails() { TaskID = 2, projectRef = 1, TaskName = "Identify Site location", StartDate = new DateTime(2022, 01, 04), Duration = "0", Progress = 30, ParentID = 1, },
                new OrdersDetails() { TaskID = 3, projectRef = 1, TaskName = "Perform soil test", StartDate = new DateTime(2022, 01, 04), Duration = "4", Progress = 40, ParentID = 1, },
                new OrdersDetails() { TaskID = 4, projectRef = 2, TaskName = "Soil test approval", StartDate = new DateTime(2022, 01, 04), Duration = "0", Progress = 30, ParentID = 1, },
                new OrdersDetails() { TaskID = 5, projectRef = 2, TaskName = "Project estimation", StartDate = new DateTime(2022, 01, 04), EndDate = new DateTime(2022, 01, 10), },
                new OrdersDetails() { TaskID = 6, projectRef = 2, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2022, 01, 06), Duration = "3", Progress = 30, ParentID = 5, },
                new OrdersDetails() { TaskID = 7, projectRef = 3, TaskName = "List materials", StartDate = new DateTime(2022, 01, 06), Duration = "3", Progress = 40, ParentID = 5, },
                new OrdersDetails() { TaskID = 8, projectRef = 3, TaskName = "Estimation approval", StartDate = new DateTime(2022, 01, 06), Duration = "0", Progress = 30, ParentID = 5, }
            };
            return Tasks;
        }

        // Properties representing order details.
        public int TaskID { get; set; }
        public string TaskName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Duration { get; set; }
        public int Progress { get; set; }
        public int? ParentID { get; set; }
        public int? projectRef { get; set; }
    }
}
