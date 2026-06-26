namespace SyncfusionBlazorApp.Data
{
    public class GanttDataModel
    {
        public class TaskData
        {
            public int TaskId { get; set; }
            public string TaskName { get; set; }
            public DateTime? StartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public string Duration { get; set; }
            public int Progress { get; set; }
            public string Predecessor { get; set; }
            public int? ParentId { get; set; }
        }
        public class ResourceInfoModel
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public double MaxUnit { get; set; }
            public string? Group { get; set; }
        }
        public class AssignmentModel
        {
            public int Id { get; set; }
            public int TaskId { get; set; }
            public int ResourceId { get; set; }
            public double Unit { get; set; }
        }
        public class CustomTaskDataModel
        {
            public int TaskId { get; set; }
            public string TaskName { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public string Duration { get; set; }
            public int Progress { get; set; }
            public int? ParentId { get; set; }
            public string Predecessor { get; set; }
            public string Notes { get; set; }
            public double? Work { get; set; }
            public string TaskType { get; set; }
            public DateTime BaselineStartDate { get; set; }
            public DateTime BaselineEndDate { get; set; }
            public string? Details { get; set; }
            public string StoryPoints { get; set; }
            public string Assignee { get; set; }
            public object ModelName { get; set; }
            public int CompletionPercentage { get; set; }
            public List<CustomTaskDataModel> SubTasks { get; set; }
        }

        public static List<CustomTaskDataModel> GetBasicTaskCollection()
        {
            List<CustomTaskDataModel> Tasks = new List<CustomTaskDataModel>() {
                new CustomTaskDataModel() { TaskId = 1, TaskName = "Product concept", StartDate = new DateTime(2021, 04, 02), EndDate = new DateTime(2021, 04, 08), Duration = "5 days" },
                new CustomTaskDataModel() { TaskId = 2, TaskName = "Defining the product usage", StartDate = new DateTime(2021, 04, 02), EndDate = new DateTime(2021, 04, 08), Duration = "3", Progress = 30, ParentId = 1 },
                new CustomTaskDataModel() { TaskId = 3, TaskName = "Defining the target audience", StartDate = new DateTime(2021, 04, 02), EndDate = new DateTime(2021, 04, 04), Duration = "3", Progress = 40, ParentId = 1 },
                new CustomTaskDataModel() { TaskId = 4, TaskName = "Prepare product sketch and notes", StartDate = new DateTime(2021, 04, 05), EndDate = new DateTime(2021, 04, 08), Duration = "2", Progress = 30, ParentId = 1, Predecessor="2" },
                new CustomTaskDataModel() { TaskId = 5, TaskName = "Concept approval", StartDate = new DateTime(2021, 04, 08), EndDate = new DateTime(2021, 04, 08), Duration="0", Predecessor="3,4" },
                new CustomTaskDataModel() { TaskId = 6, TaskName = "Market research", StartDate = new DateTime(2021, 04, 09), EndDate = new DateTime(2021, 04, 18), Predecessor="2", Duration = "4", Progress = 30 },
                new CustomTaskDataModel() { TaskId = 7, TaskName = "Demand analysis", StartDate = new DateTime(2021, 04, 09), EndDate = new DateTime(2021, 04, 12), Duration = "4", Progress = 40, ParentId = 6 },
                new CustomTaskDataModel() { TaskId = 8, TaskName = "Customer strength", StartDate = new DateTime(2021, 04, 09), EndDate = new DateTime(2021, 04, 12), Duration = "4", Progress = 30, ParentId = 7, Predecessor="5" },
                new CustomTaskDataModel() { TaskId = 9, TaskName = "Market opportunity analysis", StartDate = new DateTime(2021, 04, 09), EndDate = new DateTime(2021, 04, 012), Duration="4", ParentId= 7, Predecessor="5" },
                new CustomTaskDataModel() { TaskId = 10, TaskName = "Competitor analysis", StartDate = new DateTime(2021, 04, 15), EndDate = new DateTime(2021, 04, 18), Duration = "4", Progress = 30, ParentId= 6, Predecessor="7,8" },
                new CustomTaskDataModel() { TaskId = 11, TaskName = "Product strength analysis", StartDate = new DateTime(2021, 04, 15), EndDate = new DateTime(2021, 04, 18), Duration = "4", Progress = 40, ParentId = 6, Predecessor="9" },
                new CustomTaskDataModel() { TaskId = 12, TaskName = "Research completed", StartDate = new DateTime(2021, 04, 18), EndDate = new DateTime(2021, 04, 18), Duration = "0", Progress = 30, ParentId = 6, Predecessor="10" },
                new CustomTaskDataModel() { TaskId = 13, TaskName = "Product design and development", StartDate = new DateTime(2021, 04, 19), EndDate = new DateTime(2021, 05, 16), Duration="20", Predecessor="6" },
                new CustomTaskDataModel() { TaskId = 14, TaskName = "Functionality design", StartDate = new DateTime(2021, 04, 19), EndDate = new DateTime(2021, 04, 23), Duration = "3", Progress = 30, ParentId = 13, Predecessor="12" },
                new CustomTaskDataModel() { TaskId = 15, TaskName = "Quality design", StartDate = new DateTime(2021, 04, 19), EndDate = new DateTime(2021, 04, 23), Duration = "3", Progress = 40, ParentId = 13, Predecessor="12" },
                new CustomTaskDataModel() { TaskId = 16, TaskName = "Define reliability", StartDate = new DateTime(2021, 04, 24), EndDate = new DateTime(2021, 04, 25), Duration = "2", Progress = 30, ParentId = 13, Predecessor="15" },
                new CustomTaskDataModel() { TaskId = 17, TaskName = "Identifying raw materials", StartDate = new DateTime(2021, 04, 24), EndDate = new DateTime(2021, 04, 25), Duration="2", ParentId=13, Predecessor="15" },
                new CustomTaskDataModel() { TaskId = 18, TaskName = "Define cost plan", StartDate = new DateTime(2021, 04, 26), EndDate = new DateTime(2021, 04, 29), Duration = "2", Progress = 30, ParentId=13, Predecessor="17" },
                new CustomTaskDataModel() { TaskId = 19, TaskName = "Manufacturing cost", StartDate = new DateTime(2021, 04, 26), EndDate = new DateTime(2021, 04, 29), Duration = "2", Progress = 40, ParentId = 18, Predecessor="17" },
                new CustomTaskDataModel() { TaskId = 20, TaskName = "Selling cost", StartDate = new DateTime(2021, 04, 26), EndDate = new DateTime(2021, 04, 29), Duration = "2", Progress = 30, ParentId = 18, Predecessor="17" },
                new CustomTaskDataModel() { TaskId = 21, TaskName = "Development of final design", StartDate = new DateTime(2021, 04, 30), EndDate = new DateTime(2021, 05, 08), Duration="7", ParentId=13 },
                new CustomTaskDataModel() { TaskId = 22, TaskName = "Develop dimensions and design", StartDate = new DateTime(2021, 04, 30), EndDate = new DateTime(2021, 05, 01), Duration = "2", Progress = 30, ParentId=21, Predecessor="19,20" },
                new CustomTaskDataModel() { TaskId = 23, TaskName = "Develop designs to meet industry", StartDate = new DateTime(2021, 05, 02), EndDate = new DateTime(2021, 05, 03), Duration = "2", Progress = 40, ParentId = 21, Predecessor="22" },
                new CustomTaskDataModel() { TaskId = 24, TaskName = "Include all the details", StartDate = new DateTime(2021, 05, 06), EndDate = new DateTime(2021, 05, 08), Duration = "3", Progress = 30, ParentId = 21, Predecessor="23" },
                new CustomTaskDataModel() { TaskId = 25, TaskName = "CAD - Computer Aided Design", StartDate = new DateTime(2021, 05, 09), EndDate = new DateTime(2021, 05, 13), Duration="3", Predecessor="24" },
                new CustomTaskDataModel() { TaskId = 26, TaskName = "CAM - Computer Aided Manufacturing", StartDate = new DateTime(2021, 05, 14), EndDate = new DateTime(2021, 05, 16), Duration = "3", Progress = 30, Predecessor="25" },
                new CustomTaskDataModel() { TaskId = 27, TaskName = "Finalize the design", StartDate = new DateTime(2021, 04, 16), EndDate = new DateTime(2021, 04, 16), Duration = "0", Progress = 40, Predecessor="26" },
                new CustomTaskDataModel() { TaskId = 28, TaskName = "Prototype testing", StartDate = new DateTime(2021, 05, 17), EndDate = new DateTime(2021, 05, 22), Duration = "4", Progress = 30, Predecessor="27" },
                new CustomTaskDataModel() { TaskId = 29, TaskName = "Include feedback", StartDate = new DateTime(2021, 05, 17), EndDate = new DateTime(2021, 05, 22), Duration="4", Predecessor="28ss" },
                new CustomTaskDataModel() { TaskId = 30, TaskName = "Manufacturing", StartDate = new DateTime(2021, 05, 23), EndDate = new DateTime(2021, 05, 29), Duration = "5", Progress = 30, Predecessor="28,29" },
            };
            return Tasks;
        }

        public static List<CustomTaskDataModel> GetCustomTaskCollection()
        {
            List<CustomTaskDataModel> Tasks = new List<CustomTaskDataModel>();
            int rowCount = 0;
            int parentId = 0;
            for (int count = 0; count < 20; count++)
            {
                Tasks.Add(new CustomTaskDataModel() { TaskId = ++rowCount, TaskName = "Project" + count, StartDate = new DateTime(2022, 03, 28), EndDate = new DateTime(2022, 07, 28), TaskType = "FixedDuration", Work = 128, Duration = "4" });
                ++parentId;
                for (int childCount = 0; childCount < 10; childCount++)
                {
                    Tasks.Add(new CustomTaskDataModel() { TaskId = ++rowCount, TaskName = "Task" + rowCount, StartDate = new DateTime(2022, 03, 29), TaskType = "FixedUnit", BaselineStartDate = new DateTime(2022, 03, 29), BaselineEndDate = new DateTime(2022, 03, 31), Progress = 30, ParentId = parentId, Duration = "2", Work = 16, Predecessor = childCount == 0 ? "" : (rowCount - 1) + " FS" });
                }
            }
            return Tasks;
        }

        public static List<CustomTaskDataModel> GetVirtualTaskCollection()
        {
            List<CustomTaskDataModel> Tasks = new List<CustomTaskDataModel>();
            int rowCount = 0;
            int parentId = 0;
            for (int count = 0; count < 200; count++)
            {
                Tasks.Add(new CustomTaskDataModel() { TaskId = ++rowCount, TaskName = "Project" + count, StartDate = new DateTime(2022, 03, 28), EndDate = new DateTime(2022, 07, 28), TaskType = "FixedDuration", Work = 128, Duration = "4" });
                ++parentId;
                for (int childCount = 0; childCount < 10; childCount++)
                {
                    Tasks.Add(new CustomTaskDataModel() { TaskId = ++rowCount, TaskName = "Task" + rowCount, StartDate = new DateTime(2022, 03, 29), TaskType = "FixedUnit", BaselineStartDate = new DateTime(2022, 03, 29), BaselineEndDate = new DateTime(2022, 03, 31), Progress = 30, ParentId = parentId, Duration = "2", Work = 16, Predecessor = childCount == 0 ? "" : (rowCount - 1) + "FS" });
                }
            }
            return Tasks;
        }
        public static List<CustomTaskDataModel> GetHierarchicalCollection()
        {
            List<CustomTaskDataModel> Tasks = new List<CustomTaskDataModel>() {
                new CustomTaskDataModel() {
                    TaskId = 1,
                    TaskName = "Project initiation",
                    StartDate = new DateTime(2022, 04, 05),
                    EndDate = new DateTime(2022, 04, 21),
                    SubTasks = (new List <CustomTaskDataModel> () {
                        new CustomTaskDataModel() { TaskId = 2, TaskName = "Identify Site location", StartDate = new DateTime(2022, 04, 05), Duration = "0", Progress = 30, },
                        new CustomTaskDataModel() { TaskId = 3, TaskName = "Perform soil test", StartDate = new DateTime(2022, 04, 05), Duration = "4", Progress = 40, },
                        new CustomTaskDataModel() { TaskId = 4, TaskName = "Soil test approval", StartDate = new DateTime(2022, 04, 05), Duration = "0", Progress = 30 }, })
                },
                new CustomTaskDataModel() {
                    TaskId = 5,
                    TaskName = "Project estimation",
                    StartDate = new DateTime(2022, 04, 06),
                    EndDate = new DateTime(2022, 04, 21),
                    SubTasks = (new List <CustomTaskDataModel> () {
                        new CustomTaskDataModel() { TaskId = 6, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2022, 04, 06), Duration = "3", Progress = 30, },
                        new CustomTaskDataModel() { TaskId = 7, TaskName = "List materials", StartDate = new DateTime(2022, 04, 06), Duration = "3", Progress = 40 },
                        new CustomTaskDataModel() { TaskId = 8, TaskName = "Estimation approval", StartDate = new DateTime(2022, 04, 06), Duration = "0", Progress = 30, } })
                }
            };
            return Tasks;
        }

        public static List<ResourceInfoModel> GetResources = new List<ResourceInfoModel>()
        {
            new ResourceInfoModel() { Id= 1, Name= "Martin Tamer", Group="Planning Team"},
            new ResourceInfoModel() { Id= 2, Name= "Rose Fuller", Group="Testing Team" },
            new ResourceInfoModel() { Id= 3, Name= "Margaret Buchanan", Group="Approval Team" },
            new ResourceInfoModel() { Id= 4, Name= "Fuller King", Group="Development Team" },
            new ResourceInfoModel() { Id= 5, Name= "Davolio Fuller", Group="Approval Team" },
            new ResourceInfoModel() { Id= 6, Name= "Fuller Buchanan", Group="Development Team" },
            new ResourceInfoModel() { Id= 7, Name= "Jack Davolio", Group="Planning Team" },
            new ResourceInfoModel() { Id= 8, Name= "Tamer Vinet", Group="Testing Team" },
            new ResourceInfoModel() { Id= 9, Name= "Vinet Fuller", Group="Development Team" },
            new ResourceInfoModel() { Id= 10, Name= "Bergs Anton", Group="Testing Team" },
            new ResourceInfoModel() { Id= 11, Name= "Construction Supervisor", Group="Testing Team" },
        };
        public static List<AssignmentModel> GetAssignmentCollection()
        {
            List<AssignmentModel> assignments = new List<AssignmentModel>()
            {
                new AssignmentModel(){ Id=1, TaskId = 2 , ResourceId=1, Unit=70},
                new AssignmentModel(){ Id=2, TaskId = 3 , ResourceId=1, Unit=70},
                new AssignmentModel(){ Id=3, TaskId = 4 , ResourceId=3},
                new AssignmentModel(){ Id=4, TaskId = 5 , ResourceId=8},
                new AssignmentModel(){ Id=5, TaskId = 6 , ResourceId=2},
                new AssignmentModel(){ Id=6, TaskId = 7 , ResourceId=4, Unit=30},
                new AssignmentModel(){ Id=7, TaskId = 8 , ResourceId=8},
                new AssignmentModel(){ Id=8, TaskId = 9 , ResourceId=11},
                new AssignmentModel(){ Id=9, TaskId = 12 , ResourceId=2},
                new AssignmentModel(){ Id=10, TaskId = 13 , ResourceId=6},
                new AssignmentModel(){ Id=11, TaskId = 14 , ResourceId=7},
                new AssignmentModel(){ Id=12, TaskId = 15 , ResourceId=9},
                new AssignmentModel(){ Id=13, TaskId = 16 , ResourceId=10},
                new AssignmentModel(){ Id=14, TaskId = 17 , ResourceId=7},
                new AssignmentModel(){ Id=15, TaskId = 18 , ResourceId=5},
                new AssignmentModel(){ Id=16, TaskId = 19 , ResourceId=5}
            };
            return assignments;
        }
        public class SegmentModel
        {
            public int Id { get; set; }
            public int TaskId { get; set; }
            public DateTime SegmentStartDate { get; set; }
            public DateTime SegmentEndDate { get; set; }
            public string SegmentDuration { get; set; }
        }
        public static List<SegmentModel> GetSegmentCollection()
        {
            List<SegmentModel> segments = new List<SegmentModel>
            {
                new SegmentModel() { Id = 1, TaskId = 2, SegmentStartDate = new DateTime(2021, 04, 02), SegmentEndDate = new DateTime(2021, 04, 03) },
                new SegmentModel() { Id = 2, TaskId = 2, SegmentStartDate = new DateTime(2021, 04, 05), SegmentDuration = "1" },
                new SegmentModel() { Id = 3, TaskId = 3, SegmentStartDate = new DateTime(2021, 04, 02), SegmentDuration = "1" },
                new SegmentModel() { Id = 4, TaskId = 3, SegmentStartDate = new DateTime(2021, 04, 04), SegmentEndDate = new DateTime(2021, 04, 05) },
                new SegmentModel() { Id = 5, TaskId = 4, SegmentStartDate = new DateTime(2021, 04, 06), SegmentDuration = "1" },
                new SegmentModel() { Id = 6, TaskId = 4, SegmentStartDate = new DateTime(2021, 04, 07), SegmentEndDate = new DateTime(2021, 04, 08) },
                new SegmentModel() { Id = 7, TaskId = 7, SegmentStartDate = new DateTime(2021, 04, 09), SegmentDuration = "1" },
                new SegmentModel() { Id = 8, TaskId = 7, SegmentStartDate = new DateTime(2021, 04, 11), SegmentDuration = "1" },
                new SegmentModel() { Id = 9, TaskId = 8, SegmentStartDate = new DateTime(2021, 04, 09), SegmentEndDate = new DateTime(2021, 04, 10) },
                new SegmentModel() { Id = 10, TaskId = 8, SegmentStartDate = new DateTime(2021, 04, 12), SegmentDuration = "1" },
            };
            return segments;
        }
    }
}