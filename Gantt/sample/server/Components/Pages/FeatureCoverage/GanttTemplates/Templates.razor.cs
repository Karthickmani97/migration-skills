using Syncfusion.Blazor.DropDowns;
using Syncfusion.Blazor.Gantt;
using Syncfusion.Blazor.Grids;
using System.Dynamic;

namespace SyncfusionBlazorApp.Components.Pages.FeatureCoverage.GanttTemplates
{
    public partial class Templates
    {
        private DateTime ProjectStartDate { get; set; } = new DateTime(2025, 3, 25);
        private DateTime ProjectEndDate { get; set; } = new DateTime(2025, 09, 01);
        private List<TaskInfoModel> TaskCollection { get; set; }
        private static List<AssignmentModel> AssignmentCollection { get; set; }
        private List<SegmentModel> SegmentCollection { get; set; }
        private List<ResourceInfoModel> ResourceCollection { get; set; }
        public List<string> TaskNameDropDownData { get; set; }
        SfAutoComplete<string, string> dropdown;
        private string TaskbarEditAction { get; set; }
        public SfGantt<TaskInfoModel> Gantt { get; set; }
        public bool IsBaseLine { get; set; }
        public bool IsCriticalPath { get; set; }
        private bool IsCustomSchedulingEnabled { get; set; }
        private string text;
        private string currentDataType = string.Empty;
        private string selectedIdType = "self";
        private SfGantt<ExpandoObject> GanttExpando;
        private SfGantt<DynamicDictionary> GanttDynamic;
        private List<SegmentModelInt> SegmentCollectionInt { get; set; }
        private List<ExpandoObject> TaskCollectionExpando { get; set; }
        private List<DynamicDictionary> TaskCollectionDynamic { get; set; }
        private List<string> IdTypes = new List<string> { "self", "expando", "dynamic object" };
        public List<string> DropDownData = new List<string>() { "Open", "In Progress", "Validated", "Completed" };
        public static List<TaskInfoModel> LocalData = new List<TaskInfoModel> {
            new TaskInfoModel() { Priority= "High" },
            new TaskInfoModel() { Priority= "Normal" },
            new TaskInfoModel() { Priority= "Critical" },
    };
        private string selectedMethod { get; set; } = "";
        public IEditorSettings editorParams = new DropDownEditCellParams
        {
            Params = new DropDownListModel<object, object>()
            {
                DataSource = LocalData
            }
        };
        protected override void OnInitialized()
        {
            UpdateCollectionsBasedOnIdType(selectedIdType);
            currentDataType = selectedIdType;
        }
        private void OnIdTypeChange(Syncfusion.Blazor.DropDowns.ChangeEventArgs<string, string> args)
        {
            selectedIdType = args.Value;
            UpdateCollectionsBasedOnIdType(selectedIdType);
        }
        private void UpdateCollectionsBasedOnIdType(string idType)
        {
            switch (idType)
            {
                case "self":
                    TaskCollection = EditingData().ToList();
                    this.ResourceCollection = GetResources;
                    AssignmentCollection = GetAssignmentCollection();
                    SegmentCollection = GetSegmentCollection();
                    this.TaskNameDropDownData = TaskCollection.Select(s => s.TaskName).Distinct().ToList();
                    currentDataType = idType;
                    break;
                case "expando":
                    TaskCollectionExpando = GetTaskCollectionExpando();
                    SegmentCollectionInt = GetSegmentCollectionInt();
                    currentDataType = idType;
                    break;
                case "dynamic object":
                    TaskCollectionDynamic = GetTaskCollectionDynamic();
                    SegmentCollectionInt = GetSegmentCollectionInt();
                    currentDataType = idType;
                    break;
                default:
                    break;
            }
        }
        private List<DropdownData> methods = new List<DropdownData>
        {
            new DropdownData{ Text = "AddRecord", Value = "Add Record" },
            new DropdownData{ Text = "UpdateRecord", Value = "Update Record" },
        };
        private void HandleMethodChange(Syncfusion.Blazor.DropDowns.ChangeEventArgs<string, DropdownData> args)
        {
            selectedMethod = args.Value;
            SwitchMethods();
        }
        private async void SwitchMethods()
        {
            switch (selectedMethod)
            {
                case "Add Record":
                    var record = new TaskInfoModel() { TaskId = 100, TaskName = "New Record", StartDate = new DateTime(2025, 04, 02), Duration = "3", Progress = 50, Status = "Open" };
                    await Gantt.AddRecordAsync(record);
                    break;
                case "Update Record":
                    var data = Gantt.GetTaskByID("3");
                    data.TaskName = "Update Record";
                    data.StartDate = new DateTime(2025, 4, 6);
                    data.Progress = 50;
                    data.Status = "Open";
                    await Gantt.UpdateRecordByIDAsync(data);
                    break;
            }
        }
        private void TaskbarEditingHandler(TaskbarEditingEventArgs<TaskInfoModel> args)
        {
            TaskbarEditAction = args.Action;
        }
        private IGanttTaskModel<TaskInfoModel> GetTaskInfoModel(TaskInfoModel data)
        {
            return Gantt.GetRowTaskModel(data);
        }
        private void EnableBaseLine()
        {
            IsBaseLine = IsBaseLine ? false : true;
        }
        private async void CustomScheduling()
        {
            IsCustomSchedulingEnabled = IsCustomSchedulingEnabled ? false : true;
            await Gantt.RefreshAsync();
        }
        private void EnableCriticalPath()
        {
            IsCriticalPath = IsCriticalPath ? false : true;
        }
        public string Formatter(DateTime? date)
        {
            DateTime dateTime = (DateTime)(date);
            var month = dateTime.Month;
            if (month >= 0 && month <= 2)
            {
                return "Q1";
            }
            else if (month >= 3 && month <= 5)
            {
                return "Q2";
            }
            else if (month >= 6 && month <= 8)
            {
                return "Q3";
            }
            else
            {
                return "Q4";
            }
        }
        private async Task BeforeTooltipHandler(BeforeTooltipRenderEventArgs<TaskInfoModel> args)
        {
            await Task.CompletedTask;
        }
        public class DropdownData
        {
            public string? Text { get; set; }
            public string? Value { get; set; }
        }
        public class TaskInfoModel
        {
            public int TaskId { get; set; }
            public string TaskName { get; set; }
            public DateTime? StartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public string Duration { get; set; }
            public int Progress { get; set; }
            public string Predecessor { get; set; }
            public string Notes { get; set; }
            public int? ParentId { get; set; }
            public DateTime? BaselineStartDate { get; set; }
            public DateTime? BaselineEndDate { get; set; }
            public List<GanttIndicator> Indicators { get; set; }
            public string Assignee { get; set; }
            public bool IsManual { get; set; }
            public string Status { get; set; }
            public int? WorkersCount { get; set; }
            public DateTime WorkingDate { get; set; }
            public string Priority { get; set; }
        }
        public class ResourceInfoModel
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public double MaxUnit { get; set; }
        }
        public class AssignmentModel
        {
            public int Id { get; set; }
            public int TaskId { get; set; }
            public int ResourceId { get; set; }
            public double? Unit { get; set; }
        }
        public class SegmentModel
        {
            public int id { get; set; }
            public int TaskId { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public string Duration { get; set; }
        }
        public class SegmentModelInt
        {
            public int id { get; set; }
            public int TaskId { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public string Duration { get; set; }
        }

        private static List<ExpandoObject> expandoTasks = new List<ExpandoObject>();
        private static List<DynamicDictionary> dynamicTasks = new List<DynamicDictionary>();
        private static int ParentRecordID { get; set; }
        private static int ChildRecordID { get; set; }
        private List<ExpandoObject> GetTaskCollectionExpando()
        {
            expandoTasks.Clear();
            ParentRecordID = 0;
            ChildRecordID = 0;
            for (var i = 1; i <= 3; i++)
            {
                DateTime start = new DateTime(2025, 03, 07);
                int range = (DateTime.Today - start).Days;
                DateTime startingDate = start.AddDays(4);
                dynamic ParentRecord = new ExpandoObject();
                ParentRecord.TaskId = ++ParentRecordID;
                ParentRecord.TaskName = "Parent Task " + i;
                ParentRecord.StartDate = startingDate;
                ParentRecord.Progress = 10;
                ParentRecord.Duration = ParentRecordID % 2 == 0 ? (32).ToString() : (76).ToString();
                ParentRecord.ParentId = null;
                expandoTasks.Add(ParentRecord);
                AddExpandoChildRecords(ParentRecordID);
            }

            return expandoTasks;
        }
        public static void AddExpandoChildRecords(int ParentId)
        {
            for (var i = 1; i < 5; i++)
            {
                DateTime start = new DateTime(2025, 03, 07);
                int range = (DateTime.Today - start).Days;
                DateTime startingDate = start.AddDays(4);
                dynamic ChildRecord = new ExpandoObject();
                ChildRecord.TaskId = ++ParentRecordID;
                ChildRecord.TaskName = "Child Task " + ++ChildRecordID;
                ChildRecord.StartDate = startingDate;
                ChildRecord.Progress = 80;
                ChildRecord.Duration = ParentRecordID % 3 == 0 ? (4).ToString() : (8).ToString();
                ChildRecord.ParentId = ParentId;
                ChildRecord.Predecessor = i == 1 ? "" : (ParentRecordID - 1).ToString() + "FS";
                expandoTasks.Add(ChildRecord);
            }
        }
        private List<DynamicDictionary> GetTaskCollectionDynamic()
        {
            dynamicTasks.Clear();
            ParentRecordID = 0;
            ChildRecordID = 0;
            for (var i = 1; i <= 3; i++)
            {
                DateTime start = new DateTime(2025, 03, 07);
                int range = (DateTime.Today - start).Days;
                DateTime startingDate = start.AddDays(4);
                dynamic ParentRecord = new DynamicDictionary();
                ParentRecord.TaskId = ++ParentRecordID;
                ParentRecord.TaskName = "Parent Task " + i;
                ParentRecord.StartDate = startingDate;
                ParentRecord.Progress = 10;
                ParentRecord.Duration = ParentRecordID % 2 == 0 ? (32).ToString() : (76).ToString();
                ParentRecord.ParentId = null;
                dynamicTasks.Add(ParentRecord);
                AddDynamicChildRecords(ParentRecordID);
            }
            return dynamicTasks;
        }
        public static void AddDynamicChildRecords(int ParentId)
        {
            for (var i = 1; i < 5; i++)
            {
                DateTime start = new DateTime(2025, 03, 07);
                int range = (DateTime.Today - start).Days;
                DateTime startingDate = start.AddDays(4);
                dynamic ChildRecord = new DynamicDictionary();
                ChildRecord.TaskId = ++ParentRecordID;
                ChildRecord.TaskName = "Child Task " + ++ChildRecordID;
                ChildRecord.StartDate = startingDate;
                ChildRecord.Progress = 80;
                ChildRecord.Duration = ParentRecordID % 3 == 0 ? (4).ToString() : (8).ToString();
                ChildRecord.ParentId = ParentId;
                ChildRecord.Predecessor = i == 1 ? "" : (ParentRecordID - 1).ToString() + "FS";
                dynamicTasks.Add(ChildRecord);
            }
        }
        public static List<ResourceInfoModel> GetResources = new List<ResourceInfoModel>()
        {
            new ResourceInfoModel() { Id= 1, Name= "Martin Tamer" ,MaxUnit=70},
            new ResourceInfoModel() { Id= 2, Name= "Rose Fuller" },
            new ResourceInfoModel() { Id= 3, Name= "Margaret Buchanan" },
            new ResourceInfoModel() { Id= 4, Name= "Fuller King", MaxUnit = 100},
            new ResourceInfoModel() { Id= 5, Name= "Davolio Fuller" },
            new ResourceInfoModel() { Id= 6, Name= "Van Jack" },
            new ResourceInfoModel() { Id= 7, Name= "Fuller Buchanan" },
            new ResourceInfoModel() { Id= 8, Name= "Jack Davolio" },
            new ResourceInfoModel() { Id= 9, Name= "Tamer Vinet" },
            new ResourceInfoModel() { Id= 10, Name= "Vinet Fuller" },
            new ResourceInfoModel() { Id= 11, Name= "Bergs Anton" },
            new ResourceInfoModel() { Id= 12, Name= "Construction Supervisor" }
        };
        public static List<AssignmentModel> GetAssignmentCollection()
        {
            List<AssignmentModel> assignments = new List<AssignmentModel>()
            {
                new AssignmentModel(){ Id=1, TaskId = 5, ResourceId = 1},
                new AssignmentModel(){ Id=2, TaskId = 6, ResourceId = 2},
                new AssignmentModel(){ Id=3, TaskId = 8, ResourceId = 4},
                new AssignmentModel(){ Id=4, TaskId = 10, ResourceId = 1},
                new AssignmentModel(){ Id=5, TaskId = 11, ResourceId = 6},
                new AssignmentModel(){ Id=6, TaskId = 12, ResourceId = 1},
                new AssignmentModel(){ Id=7, TaskId = 13, ResourceId = 4},
                new AssignmentModel(){ Id=8, TaskId = 14, ResourceId = 1},
                new AssignmentModel(){ Id=9, TaskId = 15, ResourceId = 4},
                new AssignmentModel(){ Id=10, TaskId = 25, ResourceId = 1},
            };
            return assignments;
        }
        public static List<SegmentModel> GetSegmentCollection()
        {
            List<SegmentModel> segments = new List<SegmentModel>();
            segments.Add(new SegmentModel() { id = 1, TaskId = 4, StartDate = new DateTime(2025, 04, 10), Duration = "2" });
            segments.Add(new SegmentModel() { id = 2, TaskId = 4, StartDate = new DateTime(2025, 04, 13), Duration = "3" });
            segments.Add(new SegmentModel() { id = 3, TaskId = 7, StartDate = new DateTime(2025, 04, 15), Duration = "3" });
            segments.Add(new SegmentModel() { id = 4, TaskId = 7, StartDate = new DateTime(2025, 04, 18), Duration = "3" });
            segments.Add(new SegmentModel() { id = 5, TaskId = 7, StartDate = new DateTime(2025, 04, 21), Duration = "2" });
            segments.Add(new SegmentModel() { id = 6, TaskId = 11, StartDate = new DateTime(2025, 04, 24), Duration = "1" });
            segments.Add(new SegmentModel() { id = 7, TaskId = 11, StartDate = new DateTime(2025, 04, 25), Duration = "1" });
            return segments;
        }
        private List<SegmentModelInt> GetSegmentCollectionInt()
        {
            List<SegmentModelInt> segments = new List<SegmentModelInt>();
            segments.Add(new SegmentModelInt() { id = 1, TaskId = 2, StartDate = new DateTime(2025, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 2, TaskId = 2, StartDate = new DateTime(2025, 03, 29), EndDate = new DateTime(2025, 03, 31) });
            segments.Add(new SegmentModelInt() { id = 3, TaskId = 3, StartDate = new DateTime(2025, 04, 01), Duration = "2" });
            segments.Add(new SegmentModelInt() { id = 4, TaskId = 3, StartDate = new DateTime(2025, 03, 29), EndDate = new DateTime(2025, 03, 31) });
            segments.Add(new SegmentModelInt() { id = 5, TaskId = 3, StartDate = new DateTime(2025, 04, 04), Duration = "3" });
            segments.Add(new SegmentModelInt() { id = 6, TaskId = 4, StartDate = new DateTime(2025, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 7, TaskId = 4, StartDate = new DateTime(2025, 03, 29), EndDate = new DateTime(2025, 03, 31) });
            segments.Add(new SegmentModelInt() { id = 8, TaskId = 8, StartDate = new DateTime(2025, 04, 01), EndDate = new DateTime(2025, 04, 03) });
            segments.Add(new SegmentModelInt() { id = 9, TaskId = 8, StartDate = new DateTime(2025, 04, 05), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 10, TaskId = 9, StartDate = new DateTime(2025, 03, 29), EndDate = new DateTime(2025, 03, 31) });
            segments.Add(new SegmentModelInt() { id = 11, TaskId = 9, StartDate = new DateTime(2025, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 12, TaskId = 12, StartDate = new DateTime(2025, 04, 05), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 13, TaskId = 12, StartDate = new DateTime(2025, 04, 07), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 14, TaskId = 14, StartDate = new DateTime(2025, 04, 01), EndDate = new DateTime(2025, 04, 02) });
            segments.Add(new SegmentModelInt() { id = 15, TaskId = 14, StartDate = new DateTime(2025, 04, 04), Duration = "2" });
            return segments;
        }
        public static List<TaskInfoModel> EditingData()
        {
            List<TaskInfoModel> Tasks = new List<TaskInfoModel>() {
            new TaskInfoModel() { TaskId = 1, TaskName = "Planning and Permits",Assignee = "Sarah Lee", StartDate = new DateTime(2025, 04, 02), EndDate = new DateTime(2025, 04, 10), Duration = "7 days", Progress = 100, BaselineStartDate = new DateTime(2025, 04, 02), BaselineEndDate = new DateTime(2025, 04, 11),Status="Open", WorkersCount = 1 , Priority= "Critical", WorkingDate = new DateTime(2025, 04, 10), IsManual = true },
            new TaskInfoModel() { TaskId = 2, TaskName = "Site Evaluation",Assignee = "John Smith", StartDate = new DateTime(2025, 04, 02), EndDate = new DateTime(2025, 04, 04), Duration = "2 days", Progress = 80, ParentId = 1, BaselineStartDate = new DateTime(2025, 04, 02), BaselineEndDate = new DateTime(2025, 04, 05),IsManual = true,Status="Validated", WorkersCount = 1 , Priority= "Normal", WorkingDate = new DateTime(2025, 04, 10) },
            new TaskInfoModel() { TaskId = 3, TaskName = "Obtain Permits", Assignee = "John Smith",StartDate = new DateTime(2025, 04, 07), EndDate = new DateTime(2025, 04, 09), Duration = "3 days", Progress = 100, ParentId = 1, Predecessor = "2",Indicators = new List<GanttIndicator> { new GanttIndicator { Name = "Design phase", IconClass = "e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::after", Date = new DateTime(2025, 4, 13) } },Status="Completed",WorkersCount = 1, Priority= "Critical", WorkingDate = new DateTime(2025, 04, 10) },
            new TaskInfoModel() { TaskId = 4, TaskName = "Finalize Planning",Assignee = "Emily Chen", StartDate = new DateTime(2025, 04, 10), EndDate = new DateTime(2025, 04, 11), Duration = "5 days", Progress = 50, ParentId = 1, Predecessor = "3",Status="Open", WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10) },
            new TaskInfoModel() { TaskId = 5, TaskName = "Site Preparation", Assignee = "John Smith",StartDate = new DateTime(2025, 04, 14), EndDate = new DateTime(2025, 04, 18), Duration = "5 days", Progress = 100 , IsManual=true,Status="Validated", WorkersCount = 1, Priority= "Normal", WorkingDate = new DateTime(2025, 04, 10)},
            new TaskInfoModel() { TaskId = 6, TaskName = "Site Clearing", Assignee = "Emily Chen",StartDate = new DateTime(2025, 04, 14), Duration = "0", Progress = 100, ParentId = 5, Predecessor = "4", BaselineStartDate = new DateTime(2025, 04, 25,08,00,00), BaselineEndDate = new DateTime(2025, 04, 25,08,00,00),Status="In Progress", WorkersCount = 1, Priority= "Critical", WorkingDate = new DateTime(2025, 04, 10) },
            new TaskInfoModel() { TaskId = 7, TaskName = "Grading and Excavation",Assignee = "Emily Chen", StartDate = new DateTime(2025, 04, 15), EndDate = new DateTime(2025, 04, 17), Duration = "8 days", Progress = 100, ParentId = 5, Predecessor = "6",Status="Completed" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10) },
            new TaskInfoModel() { TaskId = 8, TaskName = "Foundation Work",Assignee = "Alex Johnson", StartDate = new DateTime(2025, 04, 18), EndDate = new DateTime(2025, 04, 21), Duration = "4 days", Progress = 100, ParentId = 5, Predecessor = "7",Status="Validated" , WorkersCount = 1, Priority= "Normal", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 9, TaskName = "Foundation and Basement",Assignee = "Emily Chen", StartDate = new DateTime(2025, 04, 22), EndDate = new DateTime(2025, 04, 28), Duration = "5 days", Progress = 100, ParentId = 5 ,Status="Open" , WorkersCount = 2, Priority= "High", WorkingDate = new DateTime(2025, 04, 10) },
            new TaskInfoModel() { TaskId = 10, TaskName = "Pour Foundation",Assignee = "Michael Wong", StartDate = new DateTime(2025, 04, 22), EndDate = new DateTime(2025, 04, 23), Duration = "2 days", Progress = 100, ParentId = 9, Predecessor = "8",IsManual = true,Status="In Progress" , WorkersCount = 1, Priority= "Critical", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 11, TaskName = "Cure Foundation",Assignee = "Lisa Park", StartDate = new DateTime(2025, 04, 24), EndDate = new DateTime(2025, 04, 25), Duration = "2 days", Progress = 100, ParentId = 9, Predecessor = "10",Status="Completed" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 12, TaskName = "Basement Walls",Assignee = "David Lee", StartDate = new DateTime(2025, 04, 28), EndDate = new DateTime(2025, 04, 30), Duration = "3 days", Progress = 100, ParentId = 9, Predecessor = "11",Status="Open" , WorkersCount = 1, Priority= "Normal", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 13, TaskName = "Framing",Assignee = "Michael Wong", StartDate = new DateTime(2025, 05, 01), EndDate = new DateTime(2025, 05, 07), Duration = "5 days", Progress = 100 ,Status="Validated" , WorkersCount = 1, Priority= "Critical", WorkingDate = new DateTime(2025, 04, 10) },
            new TaskInfoModel() { TaskId = 14, TaskName = "Frame Floors",Assignee = "Alex Johnson", StartDate = new DateTime(2025, 05, 01), EndDate = new DateTime(2025, 05, 02), Duration = "2 days", Progress = 100, ParentId = 13, Predecessor = "12",Status="In Progress" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 15, TaskName = "Frame Walls",Assignee = "Rachel Green", StartDate = new DateTime(2025, 05, 05), EndDate = new DateTime(2025, 05, 06), Duration = "2 days", Progress = 100, ParentId = 13, Predecessor = "14",Status="Completed" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 16, TaskName = "Install Trusses",Assignee = "Sarah Lee", StartDate = new DateTime(2025, 05, 07), EndDate = new DateTime(2025, 05, 08), Duration = "2 days", Progress = 100, ParentId = 13, Predecessor = "15",Status="Open" , WorkersCount = 1, Priority= "Normal", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 17, TaskName = "Roofing",Assignee = "Sarah Lee", StartDate = new DateTime(2025, 05, 09), EndDate = new DateTime(2025, 05, 13), Duration = "3 days", Progress = 100, Predecessor = "16",Status="Completed" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 18, TaskName = "Mechanical, Electrical, Plumbing",Assignee = "Rachel Green", StartDate = new DateTime(2025, 05, 14), EndDate = new DateTime(2025, 05, 24), Duration = "9 days", Progress = 50 ,Status="Completed" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10) },
            new TaskInfoModel() { TaskId = 19, TaskName = "HVAC Installation",Assignee = "Michael Wong", StartDate = new DateTime(2025, 05, 14), EndDate = new DateTime(2025, 05, 16), Duration = "3 days", Progress = 100, ParentId = 18, Predecessor = "17",Status="Completed" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 20, TaskName = "Plumbing Installation",Assignee = "Sarah Lee", StartDate = new DateTime(2025, 05, 19), EndDate = new DateTime(2025, 05, 21), Duration = "3 days", Progress = 50, ParentId = 18, Predecessor = "19",Status="Open" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 21, TaskName = "Electrical Installation",Assignee = "Sarah Lee", StartDate = new DateTime(2025, 05, 22), EndDate = new DateTime(2025, 05, 24), Duration = "3 days", Progress = 0, ParentId = 18, Predecessor = "20",Status="Validated" , WorkersCount = 1, Priority= "Critical", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 22, TaskName = "Interior Finishing",Assignee = "Michael Wong", StartDate = new DateTime(2025, 05, 26), EndDate = new DateTime(2025, 06, 17), Duration = "15 days", Progress = 0, Predecessor = "21",Status="Completed" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 23, TaskName = "Insulation and Drywall",Assignee = "Sarah Lee", StartDate = new DateTime(2025, 05, 26), EndDate = new DateTime(2025, 05, 30), Duration = "5 days", Progress = 0, ParentId = 22, Predecessor = "21",Status="In Progress" , WorkersCount = 1, Priority= "Normal", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 24, TaskName = "Interior Painting",Assignee = "Alex Johnson", StartDate = new DateTime(2025, 06, 02), EndDate = new DateTime(2025, 06, 05), Duration = "4 days", Progress = 0, ParentId = 22, Predecessor = "23",Status="Completed" , WorkersCount = 1, Priority= "High", WorkingDate = new DateTime(2025, 04, 10)  },
            new TaskInfoModel() { TaskId = 25, TaskName = "Flooring Installation",Assignee = "Rachel Green", StartDate = new DateTime(2025, 06, 06), EndDate = new DateTime(2025, 06, 09), Duration = "4 days", Progress = 0, ParentId = 22, Predecessor = "24",Status="Validated" , WorkersCount = 1, Priority= "Normal", WorkingDate = new DateTime(2025, 04, 10)  }
        };
            return Tasks;
        }
    }
}
