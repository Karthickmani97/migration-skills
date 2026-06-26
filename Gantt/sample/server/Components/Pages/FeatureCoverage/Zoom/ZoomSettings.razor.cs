using Syncfusion.Blazor.Gantt;
using System.Dynamic;
using Microsoft.VisualBasic;

namespace SyncfusionBlazorApp.Components.Pages.FeatureCoverage.Zoom
{
    public partial class ZoomSettings
    {
        private SfGantt<TaskDataModel> Gantt;
        private static List<TaskDataModel> TaskCollection { get; set; }
        private static List<TaskDataModel> VirtualTaskCollection { get; set; }
        private static List<AssignmentModel> AssignmentCollection { get; set; }
        private List<ResourceInfoModel> ResourceCollection { get; set; }
        private List<SegmentModel> SegmentCollection { get; set; }
        private DateTime ProjectStartDate = new DateTime(2022, 03, 28);
        private DateTime ProjectEndDate = new DateTime(2022, 07, 28);
        private ViewType viewType = ViewType.ProjectView;
        private GridLine gridLine = GridLine.Horizontal;
        private bool isSingleTier;
        private bool isVirtual;
        private bool isResourceView;
        private bool isGridLine;
        private int DefaultUnitWidth { get; set; } = 33;
        private int TopTierCount { get; set; } = 1;
        private int BottomTierCount { get; set; } = 1;

        private bool EnableTopNumericBox { get; set; } = true;
        private bool EnableTopUnitDropDown { get; set; } = true;
        private bool EnableTopFormatDropDown { get; set; } = true;
        private bool EnableBottomNumericBox { get; set; } = true;
        private bool EnableBottomUnitDropDown { get; set; } = true;
        private bool EnableBottomFormatDropDown { get; set; } = true;
        private TimelineViewMode TopTierUnit { get; set; } = TimelineViewMode.Week;
        private TimelineViewMode BottomTierUnit { get; set; } = TimelineViewMode.Day;
        public class TaskDataModel
        {
            public int TaskId { get; set; }
            public string TaskName { get; set; }
            public DateTime? StartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public string Duration { get; set; }
            public int Progress { get; set; }
            public int? ParentId { get; set; }
            public string Predecessor { get; set; }
        }
        
        public class SegmentModel
        {
            public int id { get; set; }
            public int TaskId { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public string Duration { get; set; }
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
            public double? Unit { get; set; }
        }
        
        public class TimelineUnit
        {
            public string Id { get; set; }
            public string Unit { get; set; }
        }

        public class DayFormat
        {
            public string Id { get; set; }
            public string Format { get; set; }
        }
        protected override void OnInitialized()
        {
            TaskCollection = GetTaskCollection();
            SegmentCollection = GetSegmentCollection();
            VirtualTaskCollection = GetVirtualTaskCollection();
            ResourceCollection = GetResources;
            AssignmentCollection = GetAssignmentCollection();
        }
        private async void OnButtonZoomIn()
        {
            await Gantt.ZoomInAsync();
        }
        private async void OnButtonZoomOut()
        {
            await Gantt.ZoomOutAsync();
        }
        private async void OnButtonZoomToFit()
        {
            await Gantt.ZoomToFitAsync();
        }
        private async void OnButtonResetZoom()
        {
            await Gantt.ResetZoomAsync();
        }
        private void ToggleUpdate()
        {
            if (isResourceView)
            {
                viewType = ViewType.ResourceView;
            }
            else
            {
                viewType = ViewType.ProjectView;
            }
            if (isGridLine)
            {
                gridLine = GridLine.Both;
            }
            else
            {
                gridLine = GridLine.Horizontal;
            }
            StateHasChanged();
        }

        private List<DayFormat> YearFormats = new List<DayFormat>()
        {
            new DayFormat { Id = "MMM yy", Format = "Jan 18" },
            new DayFormat { Id = "yyyy", Format = "2018" },
            new DayFormat { Id = "MMMM, y", Format = "January, 18" },
        };
        private List<DayFormat> MonthFormats = new List<DayFormat>()
        {
            new DayFormat { Id = "MMM dd, yyyy", Format = "Jan 01, 2018" },
            new DayFormat { Id = "MMMM", Format = "January" },
            new DayFormat { Id = "MMM", Format = "Jan" },
        };
        private List<DayFormat> WeekFormats = new List<DayFormat>()
        {
            new DayFormat { Id = "MMM dd, yyyy", Format = "Jan 01, 2021" },
            new DayFormat { Id = "ddd MMM dd, yy", Format = "Mon Jan 01, 19" },
            new DayFormat { Id = "ddd MMM dd", Format = "Mon Jan 01" },
        };
        private List<DayFormat> DayFormats = new List<DayFormat>()
        {
            new DayFormat { Id = "", Format = "M" },
            new DayFormat { Id = "ddd", Format = "Mon" },
            new DayFormat { Id = "dd", Format = "01" },
        };
        private List<DayFormat> HourFormats = new List<DayFormat>()
        {
            new DayFormat { Id = "hh", Format = "00" },
            new DayFormat { Id = "hh : mm a", Format = "00 : 00 AM" },
            new DayFormat { Id = "h : mm a", Format = "0 : 00 AM" },
        };

        private List<TimelineUnit> TimelineUnits = new List<TimelineUnit>()
        {
            new TimelineUnit { Id = "Year", Unit = "Year" },
            new TimelineUnit { Id = "Month", Unit = "Month" },
            new TimelineUnit { Id = "Week", Unit = "Week" },
            new TimelineUnit { Id = "Day", Unit = "Day" },
            new TimelineUnit { Id = "Hour", Unit = "Hour" }
        };
        private List<DayFormat> WeekFormatValue = new List<DayFormat>()
        {
            new DayFormat { Id = "MMM dd, yyyy", Format = "Jan 01, 2021" },
            new DayFormat { Id = "ddd MMM dd, yy", Format = "Mon Jan 01, 19" },
            new DayFormat { Id = "ddd MMM dd", Format = "Mon Jan 01" },
        };
        private List<DayFormat> DayFormatValue = new List<DayFormat>()
        {
            new DayFormat { Id = "", Format = "M" },
            new DayFormat { Id = "ddd", Format = "Mon" },
            new DayFormat { Id = "dd", Format = "01" }
        };

        private List<TaskDataModel> GetTaskCollection()
        {
            return new List<TaskDataModel>
            {
                new TaskDataModel() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2022, 03, 28), EndDate = new DateTime(2022, 07, 28), Duration="4" },
                new TaskDataModel() { TaskId = 2, TaskName = "Identify site location", StartDate = new DateTime(2022, 03, 29), Progress = 30, ParentId = 1, Duration="8", },
                new TaskDataModel() { TaskId = 3, TaskName = "Site analyze", StartDate = new DateTime(2022, 03, 29),  Progress = 50, ParentId = 1, Duration="8"},
                new TaskDataModel() { TaskId = 4, TaskName = "Perform soil test", StartDate = new DateTime(2022, 03, 29), ParentId = 1, Duration="5", Predecessor="2FS", Progress=40, },
                new TaskDataModel() { TaskId = 5, TaskName = "Soil test approval", StartDate = new DateTime(2022, 03, 29), Duration="4", Progress = 30 },
                new TaskDataModel() { TaskId = 6, TaskName = "Project estimation", StartDate = new DateTime(2022, 04, 08), Duration="8", Progress=40, ParentId=1 },
                new TaskDataModel() { TaskId = 7, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2022, 03, 29), Duration = "0", Progress = 30, ParentId = 5, Predecessor= "4FS" },
                new TaskDataModel() { TaskId = 8, TaskName = "List materials", StartDate = new DateTime(2022, 04, 01), Duration = "6", Progress = 30, ParentId = 5 },
                new TaskDataModel() { TaskId = 9, TaskName = "Estimation approval",Progress=30, StartDate = new DateTime(2022, 04, 01), Duration = "4", ParentId = 5, Predecessor="8FS" },
                new TaskDataModel() { TaskId = 10, TaskName = "Building approval", StartDate = new DateTime(2022, 04, 12), Duration = "5", ParentId = 5 },
                new TaskDataModel() { TaskId = 11, TaskName = "Construction initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", Progress=40 },
                new TaskDataModel() { TaskId = 12, TaskName = "Ground floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "5", ParentId = 11, Progress=40},
                new TaskDataModel() { TaskId = 13, TaskName = "First floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "7",ParentId = 11, Progress=40},
                new TaskDataModel() { TaskId = 14, TaskName = "Electric work initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", ParentId = 11, Progress=40, },
                new TaskDataModel() { TaskId = 15, TaskName = "Plumbing work", StartDate = new DateTime(2022, 04, 02), Duration = "5", ParentId = 11, Progress=40 },
            };
        }
        
        public List<TaskDataModel> GetVirtualTaskCollection()
        {
            var tasks = new List<TaskDataModel>();
            int id = 0;
            int parentCount = 40; // 40 parents × 5 children = 200 total
            DateTime baseStart = new DateTime(2024, 1, 1);

            for (int i = 0; i < parentCount; i++)
            {
                id++;
                var parentTask = new TaskDataModel
                {
                    TaskId = id,
                    TaskName = $"Parent Task {id}",
                    StartDate = baseStart.AddDays(i * 7),
                    EndDate = baseStart.AddDays(i * 7 + 10),
                    Duration = "10",
                    Progress = 50,
                    ParentId = null,
                    Predecessor = i > 0 ? $"{id - 1}FS" : null
                };
                tasks.Add(parentTask);

                for (int j = 0; j < 5; j++)
                {
                    id++;
                    tasks.Add(new TaskDataModel
                    {
                        TaskId = id,
                        TaskName = $"Child Task {id}",
                        StartDate = baseStart.AddDays(i * 7 + j * 2),
                        EndDate = baseStart.AddDays(i * 7 + j * 2 + 3),
                        Duration = "3",
                        Progress = 30,
                        ParentId = parentTask.TaskId,
                        Predecessor = j > 0 ? $"{id - 1}FS" : null
                    });
                }
            }

            return tasks;
        }
        
        private List<SegmentModel> GetSegmentCollection()
        {
            List<SegmentModel> segments = new List<SegmentModel>();
            segments.Add(new SegmentModel() { id = 1, TaskId = 2, StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModel() { id = 2, TaskId = 2, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModel() { id = 3, TaskId = 3, StartDate = new DateTime(2022, 04, 01), Duration = "2" });
            segments.Add(new SegmentModel() { id = 4, TaskId = 3, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModel() { id = 5, TaskId = 3, StartDate = new DateTime(2022, 04, 04), Duration = "3" });
            segments.Add(new SegmentModel() { id = 6, TaskId = 4, StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModel() { id = 7, TaskId = 4, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModel() { id = 8, TaskId = 8, StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 03) });
            segments.Add(new SegmentModel() { id = 9, TaskId = 8, StartDate = new DateTime(2022, 04, 05), Duration = "1" });
            segments.Add(new SegmentModel() { id = 10, TaskId = 9, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModel() { id = 11, TaskId = 9, StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModel() { id = 12, TaskId = 12, StartDate = new DateTime(2022, 04, 05), Duration = "1" });
            segments.Add(new SegmentModel() { id = 13, TaskId = 12, StartDate = new DateTime(2022, 04, 07), Duration = "1" });
            segments.Add(new SegmentModel() { id = 14, TaskId = 14, StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 02) });
            segments.Add(new SegmentModel() { id = 15, TaskId = 14, StartDate = new DateTime(2022, 04, 04), Duration = "2" });
            return segments;
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

        public void TopUnitChange(Syncfusion.Blazor.DropDowns.ChangeEventArgs<string, TimelineUnit> args)
        {
            TimelineViewMode changedTopUnit;
            switch (args.Value)
            {
                case "Year":
                    changedTopUnit = TimelineViewMode.Year;
                    WeekFormatValue = YearFormats;
                    break;
                case "Month":
                    changedTopUnit = TimelineViewMode.Month;
                    WeekFormatValue = MonthFormats;
                    break;
                case "Week":
                    changedTopUnit = TimelineViewMode.Week;
                    WeekFormatValue = WeekFormats;
                    break;
                case "Day":
                    changedTopUnit = TimelineViewMode.Day;
                    WeekFormatValue = DayFormats;
                    break;
                case "Hour":
                    changedTopUnit = TimelineViewMode.Hour;
                    WeekFormatValue = HourFormats;
                    break;
                default:
                    changedTopUnit = TimelineViewMode.Week;
                    WeekFormatValue = WeekFormats;
                    break;
            }

            this.UpdateUnitWidth(args.Value, "top");
            TopTierUnit = changedTopUnit;
        }

        public void BottomUnitChange(Syncfusion.Blazor.DropDowns.ChangeEventArgs<string, TimelineUnit> args)
        {
            TimelineViewMode changedBottomUnit;
            switch (args.Value)
            {
                case "Year":
                    changedBottomUnit = TimelineViewMode.Year;
                    DayFormatValue = YearFormats;
                    break;
                case "Month":
                    changedBottomUnit = TimelineViewMode.Month;
                    DayFormatValue = MonthFormats;
                    break;
                case "Week":
                    changedBottomUnit = TimelineViewMode.Week;
                    DayFormatValue = WeekFormats;
                    break;
                case "Day":
                    changedBottomUnit = TimelineViewMode.Day;
                    DayFormatValue = DayFormats;
                    break;
                case "Hour":
                    changedBottomUnit = TimelineViewMode.Hour;
                    DayFormatValue = HourFormats;
                    break;
                default:
                    changedBottomUnit = TimelineViewMode.Day;
                    DayFormatValue = DayFormats;
                    break;
            }

            this.UpdateUnitWidth(args.Value, "bottom");
            BottomTierUnit = changedBottomUnit;
        }
        
        void UpdateUnitWidth(string unit, string tier)
        {
            int unitWidth;
            string topUnit = tier == "top" ? unit : TopTierUnit.ToString();
            string bottomUnit = tier == "bottom" ? unit : BottomTierUnit.ToString();
            string[] units = new string[6] { "None", "Hour", "Day", "Week", "Month", "Year" };
            string bootomCellUnit;
            if (Array.IndexOf(units, topUnit) == 0 && Array.IndexOf(units, bottomUnit) == 0)
            {
                bootomCellUnit = "Day";
            }
            else if (Array.IndexOf(units, topUnit) == 0 && Array.IndexOf(units, bottomUnit) > 0)
            {
                bootomCellUnit = bottomUnit;
            }
            else if (Array.IndexOf(units, topUnit) > 0 && Array.IndexOf(units, bottomUnit) == 0)
            {
                bootomCellUnit = topUnit;
            }
            else if (Array.IndexOf(units, topUnit) <= Array.IndexOf(units, bottomUnit))
            {
                bootomCellUnit = topUnit;
            }
            else
            {
                bootomCellUnit = bottomUnit;
            }

            switch (bootomCellUnit)
            {
                case "Year":
                    unitWidth = 2000;
                    break;
                case "Month":
                    unitWidth = 300;
                    break;
                case "Week":
                    unitWidth = 150;
                    break;
                case "Day":
                    unitWidth = 33;
                    break;
                case "Hour":
                    unitWidth = 25;
                    break;
                default:
                    unitWidth = 33;
                    break;
            }

            DefaultUnitWidth = unitWidth;
        }

    }
}
