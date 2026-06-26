using Syncfusion.Blazor;
using Syncfusion.Blazor.Data;
using Syncfusion.Blazor.Gantt;
using System.Dynamic;

namespace SyncfusionBlazorApp.Components.Pages.FeatureCoverage.UndoRedo
{
    public partial class UndoRedoDataBinding
    {
        public SfGantt<TaskInfoModel> Gantt;
        public SfGantt<TaskData> GanttInstance;
        public SfGantt<ExpandoObject> GanttExpando;
        public SfGantt<DynamicDictionary> GanttDynamic;
        private List<TaskInfoModel> TaskCollection { get; set; }
        private List<ExpandoObject> TaskCollectionExpando { get; set; }
        private List<DynamicDictionary> TaskCollectionDynamic { get; set; }
        private List<ResourceInfoModel> ResourceCollection { get; set; }
        private List<ResourceAlloacteData> ResourceCustomAdaptorCollection { get; set; }
        private static List<AssignmentModel> AssignmentCustomAdaptorCollection { get; set; } = new();
        private List<SegmentModel> SegmentCollection { get; set; }
        private static List<AssignmentModel> AssignmentCollection { get; set; } = new();
        private string assignmentEventMessage { get; set; }
        private string selectedIdType = "Segment";
        private string currentDataType = string.Empty;
        public static List<TaskData> GanttData { get; set; }
        public static List<TaskData> gantt = new List<TaskData>();
        public static List<TaskData> DisplayedData = new List<TaskData>(); //  To store the displayed records
        public static int? DisplayCount; //  Get the displayed records count
        public static string ResourceName { get; set; } // Get the resource name on dropdown list
        private List<string> IdTypes = new List<string> { "UnScheduled", "Segment", "RTL", "expando", "dynamic object", "custom adaptor", "Virtual" };
        List<GanttUndoRedoAction> undoRedoAction = new List<GanttUndoRedoAction> {
        GanttUndoRedoAction.Sort, GanttUndoRedoAction.Add, GanttUndoRedoAction.ColumnReorder, GanttUndoRedoAction.ColumnResize,
        GanttUndoRedoAction.ColumnState, GanttUndoRedoAction.Delete, GanttUndoRedoAction.Edit, GanttUndoRedoAction.Filter,
        GanttUndoRedoAction.Indent, GanttUndoRedoAction.Outdent, GanttUndoRedoAction.NextTimeSpan, GanttUndoRedoAction.PreviousTimeSpan,
        GanttUndoRedoAction.RowDragAndDrop, GanttUndoRedoAction.Search,GanttUndoRedoAction.Delete, GanttUndoRedoAction.TaskbarEdit,
        GanttUndoRedoAction.ZoomIn, GanttUndoRedoAction.ZoomOut, GanttUndoRedoAction.ZoomToFit,GanttUndoRedoAction.Collapse,GanttUndoRedoAction.Expand,GanttUndoRedoAction.SplitterResize
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
                case "UnScheduled":
                    TaskCollection = GetUnScheduledTaskCollection();
                    currentDataType = idType;
                    break;
                case "Segment":
                    TaskCollection = GetTaskCollection();
                    SegmentCollection = GetSegmentCollection();
                    ResourceCollection = GetResources;
                    AssignmentCollection = GetAssignmentCollection();
                    currentDataType = idType;
                    break;
                case "RTL":
                    TaskCollection = GetTaskCollection();
                    ResourceCollection = GetResources;
                    AssignmentCollection = GetAssignmentCollection();
                    currentDataType = idType;
                    break;
                case "Virtual":
                    TaskCollection = GetVirtualData();
                    currentDataType = idType;
                    break;
                case "expando":
                    TaskCollectionExpando = GetTaskCollectionExpando();
                    SegmentCollection = GetSegmentCollection();
                    currentDataType = idType;
                    break;
                case "dynamic object":
                    TaskCollectionDynamic = GetTaskCollectionDynamic();
                    SegmentCollection = GetSegmentCollection();
                    currentDataType = idType;
                    break;
                case "custom adaptor":
                    GanttData = GetGantt().ToList();
                    ResourceCustomAdaptorCollection = GetCustomAdaptorResources;
                    currentDataType = idType;
                    break;
            }
        }
        private async Task AssignmentHandler(ResourceAssignmentChangeEventArgs<AssignmentModel> args)
        {
            if (args.AddedResources is not null && args.AddedResources.Any())
            {
                assignmentEventMessage = "New resource is added!";
            }
            if (args.UpdatedResources is not null && args.UpdatedResources.Any())
            {
                assignmentEventMessage = "The resource details are updated!";
            }
            if (args.DeletedResources is not null && args.DeletedResources.Any())
            {
                assignmentEventMessage = "The resource deleted!";
                foreach (AssignmentModel assignment in args.DeletedResources)
                {
                    if (assignment.TaskId == 3)
                    {
                        assignmentEventMessage = "The deleted resource action is canceled!";
                        args.Cancel = true;
                    }
                }
            }
            await Task.CompletedTask;
        }
        public class TaskInfoModel
        {
            public int TaskId { get; set; }
            public string? TaskName { get; set; }
            public TaskType TaskType { get; set; }
            public DateTime? StartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public string Duration { get; set; }
            public double Progress { get; set; }
            public int? ParentId { get; set; }
            public string Notes { get; set; }
            public double? Work { get; set; }
            public string Predecessor { get; set; }
            public bool IsManual { get; set; }
        }

        public class ResourceInfoModel
        {
            public int Id { get; set; }
            public string? Name { get; set; }
        }
        public class AssignmentModel
        {
            public int PrimaryId { get; set; }
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
            public string? Duration { get; set; }
        }

        List<ResourceInfoModel> GetResources = new List<ResourceInfoModel>() {
            new ResourceInfoModel() { Id= 1, Name= "Martin Tamer"},
            new ResourceInfoModel() { Id= 2, Name= "Rose Fuller" },
            new ResourceInfoModel() { Id= 3, Name= "Margaret Buchanan" },
            new ResourceInfoModel() { Id= 4, Name= "Fuller King" },
        };

        // Custom adaptor
        public class TaskData
        {
            public int TaskID { get; set; }
            public string TaskName { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public int Progress { get; set; }
            public string Duration { get; set; }
            public string Predecessor { get; set; }
            public int? ParentID { get; set; }
            public TaskData() { }
        }

        public class ResourceAlloacteData
        {
            public int ResourceId { get; set; }
            public string ResourceName { get; set; }
            public double? Unit { get; set; }
        }

        // Resource collection
        private static List<ResourceAlloacteData> GetCustomAdaptorResources = new List<ResourceAlloacteData>()
        {
            new ResourceAlloacteData() { ResourceId= 1, ResourceName= "Martin Tamer"},
            new ResourceAlloacteData() { ResourceId= 2, ResourceName= "Rose Fuller" },
            new ResourceAlloacteData() { ResourceId= 3, ResourceName= "Margaret Buchanan" },
            new ResourceAlloacteData() { ResourceId= 4, ResourceName= "Fuller King" },
            new ResourceAlloacteData() { ResourceId= 5, ResourceName= "Davolio Fuller" },
            new ResourceAlloacteData() { ResourceId= 7, ResourceName= "Fuller Buchanan" },
            new ResourceAlloacteData() { ResourceId= 8, ResourceName= "Jack Davolio" },
            new ResourceAlloacteData() { ResourceId= 9, ResourceName= "Tamer Vinet" },
            new ResourceAlloacteData() { ResourceId= 10, ResourceName= "Vinet Fuller" },
            new ResourceAlloacteData() { ResourceId= 11, ResourceName= "Bergs Anton" },
            new ResourceAlloacteData() { ResourceId= 12, ResourceName= "Construction Supervisor" }
        };

        // Handles the change event of the resource dropdown and sets the selected resource name.
        private void ChangeResource(Syncfusion.Blazor.DropDowns.ChangeEventArgs<string, ResourceAlloacteData> args)
        {
            ResourceName = args.Value;
        }

        // Gantt datasource collection
        private static List<TaskData> GetGantt()
        {
            if (gantt.Count == 0)
            {
                int assignmentCount = 0;
                for (var i = 1; i <= 8; i++)
                {

                    int parentTaskId = gantt.Count + 1;
                    gantt.Add(new TaskData() { TaskID = parentTaskId, TaskName = "Parent Task " + parentTaskId.ToString(), StartDate = new DateTime(2025, 06, 07), EndDate = new DateTime(2025, 08, 25), Progress = 40, ParentID = null, Duration = "5" });
                    int parent = gantt.Count;
                    for (var j = 0; j < 3; j++)
                    {
                        int childTaskId = gantt.Count + 1;
                        if (j == 0)
                        {
                            gantt.Add(new TaskData() { TaskID = childTaskId, TaskName = "Child Task " + childTaskId.ToString(), StartDate = new DateTime(2025, 06, 07), EndDate = new DateTime(2025, 08, 25), Progress = 30, ParentID = parentTaskId, Duration = "3" });
                            AssignmentCustomAdaptorCollection.Add(new AssignmentModel() { PrimaryId = assignmentCount++, TaskId = childTaskId, ResourceId = 1, Unit = 70 });
                            AssignmentCustomAdaptorCollection.Add(new AssignmentModel() { PrimaryId = assignmentCount++, TaskId = childTaskId, ResourceId = 6 });
                        }
                        else if (j == 1)
                        {
                            gantt.Add(new TaskData() { TaskID = childTaskId, TaskName = "Child Task " + childTaskId.ToString(), StartDate = new DateTime(2025, 06, 07), EndDate = new DateTime(2025, 08, 25), Progress = 100, ParentID = parentTaskId, Duration = "4" });
                            AssignmentCustomAdaptorCollection.Add(new AssignmentModel() { PrimaryId = assignmentCount++, TaskId = childTaskId, ResourceId = 5, Unit = 70 });
                            AssignmentCustomAdaptorCollection.Add(new AssignmentModel() { PrimaryId = assignmentCount++, TaskId = childTaskId, ResourceId = 7 });
                        }
                        else
                        {
                            gantt.Add(new TaskData() { TaskID = childTaskId, TaskName = "Child Task " + childTaskId.ToString(), StartDate = new DateTime(2025, 06, 07), EndDate = new DateTime(2025, 08, 25), Progress = 23, ParentID = parentTaskId, Duration = "6" });
                            AssignmentCustomAdaptorCollection.Add(new AssignmentModel() { PrimaryId = assignmentCount++, TaskId = childTaskId, ResourceId = 12, Unit = 70 });
                            AssignmentCustomAdaptorCollection.Add(new AssignmentModel() { PrimaryId = assignmentCount++, TaskId = childTaskId, ResourceId = 4 });
                        }
                    }
                }
            }
            return gantt;
        }
        // This method used to get the resource id and name collections based on GetCurrentViewRecords() method
        private static List<ResourceAlloacteData> getResourceRecords()
        {
            // Use a dictionary to prevent duplicate entries
            Dictionary<int, string> resourceMap = new Dictionary<int, string>();

            foreach (var assignment in AssignmentCustomAdaptorCollection)
            {
                if (!resourceMap.ContainsKey(assignment.ResourceId))
                {
                    // You may replace the below name logic with actual lookup if available
                    resourceMap[assignment.ResourceId] = "Resource " + assignment.ResourceId;
                }
            }

            return resourceMap.Select(r => new ResourceAlloacteData
            {
                ResourceId = r.Key,
                ResourceName = r.Value
            }).ToList();
        }


        // returns the child records count
        private int GetChildRecordsCount(int? id)
        {
            var count = 0;
            for (var i = 0; i < GetGantt().Count; i++)
            {
                if (GetGantt()[i].ParentID == id)
                {
                    count++;
                    count += GetChildRecordsCount(GetGantt()[i].TaskID);
                }
            }
            return count;
        }

        // Implementing custom adaptor by extending the DataAdaptor class.
        public class CustomAdaptor : DataAdaptor
        {
            // Performs data Read operation.
            public override object Read(DataManagerRequest dm, string key = null)
            {
                IEnumerable<TaskData> DataSource = GanttData;
                List<TaskData> sortedData = new();
                List<TaskData> filteredData = new();

                if (dm.Sorted != null && dm.Sorted.Count > 0)
                {
                    // Sorting
                    if (dm.Sorted[0].Name == "Resources")
                    {
                        IEnumerable<ResourceAlloacteData> datasource = getResourceRecords(); // Get unique resource list
                        dm.Sorted[0].Name = "ResourceName"; // Sort based on ResourceName
                        var sortedResources = DataOperations.PerformSorting(datasource, dm.Sorted); // Apply sorting

                        // List<TaskData> sortedData = new List<TaskData>();
                        List<TaskData> datas = new List<TaskData>();
                        foreach (var resource in sortedResources)
                        {
                            // Get first task associated with the resource from AssignmentCollection
                            var assignedTaskId = AssignmentCustomAdaptorCollection.FirstOrDefault(a => a.ResourceId == resource.ResourceId)?.TaskId;

                            if (assignedTaskId != null)
                            {
                                var task = DataSource.FirstOrDefault(t => t.TaskID == assignedTaskId);
                                if (task != null)
                                {
                                    datas.Add(task);
                                }
                            }
                        }

                        // Replace original data source with sorted task data
                        DataSource = datas;

                    }
                    else
                    {
                        DataSource = DataOperations.PerformSorting(DataSource, dm.Sorted);
                    }
                    dm.Sorted = null;
                }
                if (dm.Where != null && dm.Where.Count > 0)
                {
                    if (dm.Where[0].predicates == null)
                    {
                        ResourceName = "";
                    }
                    // Filtering
                    if (dm.Where[0].Field != null && dm.Where[0].Field == "ParentID")
                    {

                    }
                    else if (dm.Where[0].predicates != null)
                    {
                        List<WhereFilter> tempPredicates = new List<WhereFilter>();
                        List<WhereFilter> resourcepredicates = new List<WhereFilter>();
                        List<WhereFilter> columnPredicates = new List<WhereFilter>();
                        tempPredicates = dm.Where[0].predicates;
                        dm.Where[0].predicates = new List<WhereFilter>();
                        foreach (var field in tempPredicates)
                        {
                            if (field.Field == "Resources") { resourcepredicates.Add(field); }
                            else { columnPredicates.Add(field); }
                        }

                        if (resourcepredicates.Count > 0)
                        {
                            dm.Where[0].predicates.Add(resourcepredicates[0]);
                            // Get list of resources from assignment collection
                            IEnumerable<ResourceAlloacteData> datasource = getResourceRecords();

                            // Set filter field to ResourceName and fallback to default value if needed
                            resourcepredicates[0].Field = "ResourceName";
                            resourcepredicates[0].value ??= ResourceName;

                            // Perform filtering based on resource name
                            var filteredResources = DataOperations.PerformFiltering(datasource, dm.Where, dm.Where[0].Operator);

                            // Prepare filtered task list
                            List<TaskData> datas = new List<TaskData>();

                            foreach (var resource in filteredResources)
                            {
                                // Get the task ID assigned to the resource
                                var taskId = AssignmentCustomAdaptorCollection.FirstOrDefault(a => a.ResourceId == resource.ResourceId)?.TaskId;
                                if (taskId != null)
                                {
                                    var task = DataSource.FirstOrDefault(t => t.TaskID == taskId);
                                    if (task != null)
                                    {
                                        datas.Add(task);
                                    }
                                }
                            }

                            // Replace the original DataSource with filtered task list
                            DataSource = datas;

                            // Remove the processed predicate
                            dm.Where[0].predicates.Remove(resourcepredicates[0]);

                        }
                        else
                        {
                            ResourceName = "";
                        }
                        if (columnPredicates.Count > 0)
                        {
                            dm.Where[0].predicates.AddRange(columnPredicates);
                            DataSource = DataOperations.PerformFiltering(DataSource, dm.Where, dm.Where[0].Operator);
                        }
                        dm.Where[0].predicates = tempPredicates;
                    }
                }

                if (dm.Skip != 0)
                {
                    //Paging
                    DataSource = DataOperations.PerformSkip(DataSource, dm.Skip);
                }
                if (dm.Take != 0)
                {
                    DataSource = DataOperations.PerformTake(DataSource, dm.Take);
                }
                if (dm.Where != null && dm.Where.Count > 0)
                {
                    if (dm.Where[0].Field == null)
                    {
                        DisplayedData.Clear();
                        DataSource = GetHierarchyDataToDisplay(DataSource);
                    }
                }
                // Searching
                if (dm.Search != null && dm.Search.Count > 0)
                {
                    DataSource = DataOperations.PerformSearching(DataSource, dm.Search);
                    DisplayedData.Clear();
                    DataSource = GetHierarchyDataToDisplay(DataSource);
                }
                int count = DataSource.Cast<TaskData>().Count();
                return dm.RequiresCounts ? new DataResult() { Result = DataSource, Count = count } : (object)DataSource;
            }
            public override object Insert(DataManager dm, object value, string key)
            {
                GanttData.Insert(0, value as TaskData);
                return value;
            }

            // Performs Remove operation.
            public override object Remove(DataManager dm, object value, string keyField, string key)
            {
                GanttData.Remove(GanttData.Where(or => or.TaskID == int.Parse(value.ToString())).FirstOrDefault());
                return value;
            }

            // Performs Update operation.
            public override object Update(DataManager dm, object value, string keyField, string key)
            {
                var data = GanttData.Where(or => or.TaskID == (value as TaskData).TaskID).FirstOrDefault();
                if (data != null)
                {
                    data.TaskID = (value as TaskData).TaskID;
                    data.TaskName = (value as TaskData).TaskName;
                    data.StartDate = (value as TaskData).StartDate;
                    data.EndDate = (value as TaskData).EndDate;
                    data.Duration = (value as TaskData).Duration;
                    data.Progress = (value as TaskData).Progress;
                }
                return value;
            }

            // This method used to get the records collection for every action (ex: fitering.,)
            private List<TaskData> GetHierarchyDataToDisplay(IEnumerable<TaskData> records)
            {
                foreach (var record in records)
                {
                    if (record.ParentID != null)
                    {
                        //here append the child parent's child records
                        var isParent = GanttData.Where(rec => rec.ParentID == record.TaskID).ToList();
                        if (isParent.Any())
                        {
                            DisplayedData = GetDisplayData(record); // calling FilterData method to add parent to new list
                            IEnumerable<TaskData> childRecords = GanttData.Where(p => p.ParentID == record.TaskID).ToList();
                            AddDisplayedRecord(record);
                            foreach (var data in childRecords)
                            {
                                AddDisplayedRecord(data); //binding child record to searched parent record
                            }
                        }
                        else
                        {
                            DisplayedData = GetDisplayData(record); // calling FilterData method to add parent to new list
                            AddDisplayedRecord(record);
                        }
                    }
                    else
                    {
                        var childRecords = GanttData.Where(p => p.ParentID == record.TaskID).ToList();
                        foreach (var data in childRecords)
                        {
                            DisplayedData.Add(data); //binding child record to searched parent record
                        }
                        AddDisplayedRecord(record);
                    }
                }
                return DisplayedData;
            }

            // Adding the record for DisplayedData and avoid the duplicate records
            private void AddDisplayedRecord(TaskData record)
            {
                if (DisplayedData.FindIndex(d => d.TaskID == record.TaskID) == -1)
                {
                    DisplayedData.Add(record);//adding filtered data to list
                }
            }

            // This method used to get the parent and child records based on actions (ex: fitering.,)
            private List<TaskData> GetDisplayData(TaskData data)
            {
                var parentRecord = GanttData.Where(p => p.TaskID == data.ParentID).FirstOrDefault();
                if (parentRecord.ParentID != null)
                {
                    DisplayedData = GetDisplayData(parentRecord);
                    if (DisplayedData.FindIndex(d => d.TaskID == parentRecord.TaskID) == -1)
                    {
                        DisplayedData.Add(parentRecord);
                        DisplayCount++;
                    }
                }
                else
                {
                    var alreadyPresent = DisplayedData.FindIndex(d => d.TaskID == parentRecord.TaskID);
                    if (alreadyPresent == -1)// if parent is not present already, then add parent to list
                    {
                        DisplayedData.Add(parentRecord);
                        DisplayCount++; //adding parent data to list
                    }
                }
                return DisplayedData;
            }
        }

        // Event that is triggered when a row is being dropping
        private void RowDroppingHandler(Syncfusion.Blazor.Grids.RowDroppingEventArgs<TaskData> args)
        {
            var position = args.Target.ID; // drop position
            var dropIndex = Convert.ToInt32(args.DropIndex); // drop index
            var targetDataID = GanttInstance.GetCurrentViewRecords()[dropIndex].TaskID; // drop index data's TaskId
            var targetData = GanttData.Where(ds => ds.TaskID == targetDataID).FirstOrDefault();
            var index = Convert.ToInt32(args.DropIndex);  // drop index
            if (position == " e-droptop" || position == " e-dropbottom") // if a record is dropped below/above another record
            {
                if (args.Data[0].ParentID != null) // if dragged record has parent
                {
                    var childCount = 0;
                    int parent1 = (int)args.Data[0].ParentID;
                    childCount += GetChildRecordsCount(parent1); // finding the number of child for dragged record's parent
                    if (childCount == 1) // if the dragged record is the only child for a particular record
                    {
                        var i = 0;
                        for (; i < GanttData.Count; i++)
                        {
                            if (GanttData[i].TaskID == parent1)
                            {
                                break;
                            }
                            if (GanttData[i].TaskID == args.Data[0].TaskID)
                            {
                                //set parentItem of dragged record to null
                                GanttData[i].ParentID = null;
                                break;
                            }
                        }
                    }
                }
                var data = GanttData.Where(ds => ds.TaskID == args.Data[0].TaskID).FirstOrDefault();
                //removing dragged record from list
                GanttData.Remove(GanttData.Where(ds => ds.TaskID == args.Data[0].TaskID).FirstOrDefault());
                data.ParentID = targetData.ParentID; //setting the dropIndex data's parent as parent of dragged record

                if (position == " e-dropbottom") // if a record is dropped below another record
                {
                    index = GanttData.IndexOf(targetData);
                    index = index + 1;
                    GanttData.Insert(index, data);
                }
                else if (position == " e-droptop") // if a record is dropped above another record
                {
                    index = GanttData.IndexOf(targetData);
                    index = index + GetChildRecordsCount(targetDataID); // find the target record's children count to find drop index
                    GanttData.Insert(index, data);
                }
            }

            else if (position == " e-dropchild") // if a record is dropped as child to another record(middle segment)
            {
                var data = GanttData.Where(ds => ds.TaskID == args.Data[0].TaskID).FirstOrDefault();
                var dropData = GanttData.Where(ds => ds.TaskID == targetDataID).FirstOrDefault();
                // removing dragged record from list
                GanttData.Remove(GanttData.Where(ds => ds.TaskID == args.Data[0].TaskID).FirstOrDefault());
                data.ParentID = targetDataID; //setting the dropIndex data's ID as parent of dragged record
                index = index + 1;
                GanttData.Insert(index, data);
            }
            GanttData = GanttData.ToList();
        }

        public static List<AssignmentModel> GetAssignmentCollection()
        {
            List<AssignmentModel> assignments = new List<AssignmentModel>()
            {
                new AssignmentModel(){ PrimaryId = 1, TaskId = 2, ResourceId = 1 },
                new AssignmentModel(){ PrimaryId = 2, TaskId = 3, ResourceId = 1 },
                new AssignmentModel(){ PrimaryId = 3, TaskId = 4, ResourceId = 1 },
                new AssignmentModel(){ PrimaryId = 4, TaskId = 5, ResourceId = 1 },
                new AssignmentModel(){ PrimaryId = 5, TaskId = 6, ResourceId = 1 },
                new AssignmentModel(){ PrimaryId = 6, TaskId = 7, ResourceId = 1 },

                new AssignmentModel(){ PrimaryId = 7, TaskId = 9, ResourceId = 2 },
                new AssignmentModel(){ PrimaryId = 8, TaskId = 10, ResourceId = 2 },
                new AssignmentModel(){ PrimaryId = 9, TaskId = 11, ResourceId = 2 },
                new AssignmentModel(){ PrimaryId = 10, TaskId = 12, ResourceId = 2 },
                new AssignmentModel(){ PrimaryId = 11, TaskId = 13, ResourceId = 2 },
                new AssignmentModel(){ PrimaryId = 12, TaskId = 14, ResourceId = 2 },

                new AssignmentModel(){ PrimaryId = 13, TaskId = 16, ResourceId = 3 },
                new AssignmentModel(){ PrimaryId = 14, TaskId = 17, ResourceId = 3 },
                new AssignmentModel(){ PrimaryId = 15, TaskId = 18, ResourceId = 3 },
            };
            return assignments;
        }

        // Expando object
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
                DateTime start = new DateTime(2025, 03, 29);
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
                DateTime start = new DateTime(2025, 03, 29);
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
        //dynamic object
        public class DynamicDictionary : DynamicObject
        {
            Dictionary<string, object> dictionary = new Dictionary<string, object>();
            public override bool TryGetMember(GetMemberBinder binder, out object result)
            {
                string name = binder.Name;
                return dictionary.TryGetValue(name, out result);
            }

            public override bool TrySetMember(SetMemberBinder binder, object value)
            {
                dictionary[binder.Name] = value;
                return true;
            }

            public override System.Collections.Generic.IEnumerable<string> GetDynamicMemberNames()
            {
                return this.dictionary?.Keys;
            }
        }
        private List<DynamicDictionary> GetTaskCollectionDynamic()
        {
            dynamicTasks.Clear();
            ParentRecordID = 0;
            ChildRecordID = 0;
            for (var i = 1; i <= 3; i++)
            {
                DateTime start = new DateTime(2025, 03, 29);
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
                DateTime start = new DateTime(2025, 03, 29);
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
        private List<SegmentModel> GetSegmentCollection()
        {
            List<SegmentModel> segments = new List<SegmentModel>();
            segments.Add(new SegmentModel() { id = 1, TaskId = 2, StartDate = new DateTime(2025, 03, 14), Duration = "1" });
            segments.Add(new SegmentModel() { id = 2, TaskId = 2, StartDate = new DateTime(2025, 03, 11), EndDate = new DateTime(2025, 03, 13) });
            segments.Add(new SegmentModel() { id = 3, TaskId = 3, StartDate = new DateTime(2025, 04, 01), Duration = "2" });
            segments.Add(new SegmentModel() { id = 4, TaskId = 3, StartDate = new DateTime(2025, 03, 29), EndDate = new DateTime(2025, 03, 31) });
            segments.Add(new SegmentModel() { id = 5, TaskId = 3, StartDate = new DateTime(2025, 04, 04), Duration = "3" });
            segments.Add(new SegmentModel() { id = 6, TaskId = 4, StartDate = new DateTime(2025, 04, 01), Duration = "1" });
            segments.Add(new SegmentModel() { id = 7, TaskId = 4, StartDate = new DateTime(2025, 03, 29), EndDate = new DateTime(2025, 03, 31) });
            segments.Add(new SegmentModel() { id = 8, TaskId = 8, StartDate = new DateTime(2025, 04, 01), EndDate = new DateTime(2025, 04, 03) });
            segments.Add(new SegmentModel() { id = 9, TaskId = 8, StartDate = new DateTime(2025, 04, 05), Duration = "1" });
            segments.Add(new SegmentModel() { id = 10, TaskId = 9, StartDate = new DateTime(2025, 03, 29), EndDate = new DateTime(2025, 03, 31) });
            segments.Add(new SegmentModel() { id = 11, TaskId = 9, StartDate = new DateTime(2025, 04, 01), Duration = "1" });
            segments.Add(new SegmentModel() { id = 12, TaskId = 12, StartDate = new DateTime(2025, 04, 05), Duration = "1" });
            segments.Add(new SegmentModel() { id = 13, TaskId = 12, StartDate = new DateTime(2025, 04, 07), Duration = "1" });
            segments.Add(new SegmentModel() { id = 14, TaskId = 14, StartDate = new DateTime(2025, 04, 01), EndDate = new DateTime(2025, 04, 02) });
            segments.Add(new SegmentModel() { id = 15, TaskId = 14, StartDate = new DateTime(2025, 04, 04), Duration = "2" });
            return segments;
        }
        private List<TaskInfoModel> GetTaskCollection()
        {
            return new List<TaskInfoModel>
            {
                new TaskInfoModel() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2025, 03, 28), EndDate = new DateTime(2025, 07, 28), Duration="4" },
                new TaskInfoModel() { TaskId = 2, TaskName = "Identify site location", StartDate = new DateTime(2025, 03, 29), Progress = 30, ParentId = 1, Duration="8", },
                new TaskInfoModel() { TaskId = 3, TaskName = "Site analyze", StartDate = new DateTime(2025, 03, 29),  Progress = 50, ParentId = 1, Duration="8"},
                new TaskInfoModel() { TaskId = 4, TaskName = "Perform soil test", StartDate = new DateTime(2025, 03, 29), ParentId = 1, Duration="5", Predecessor="2FS", Progress=40, },
                new TaskInfoModel() { TaskId = 5, TaskName = "Soil test approval", StartDate = new DateTime(2025, 03, 29), Duration="4", Progress = 30 },
                new TaskInfoModel() { TaskId = 6, TaskName = "Project estimation", StartDate = new DateTime(2025, 04, 08), Duration="8", Progress=40, ParentId=1 },
                new TaskInfoModel() { TaskId = 7, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2025, 03, 29), Duration = "0", Progress = 30, ParentId = 5, Predecessor= "4FS" },
                new TaskInfoModel() { TaskId = 8, TaskName = "List materials", StartDate = new DateTime(2025, 04, 01), Duration = "6", Progress = 30, ParentId = 5 },
                new TaskInfoModel() { TaskId = 9, TaskName = "Estimation approval",Progress=30, StartDate = new DateTime(2025, 04, 01), Duration = "4", ParentId = 5, Predecessor="8FS" },
                new TaskInfoModel() { TaskId = 10, TaskName = "Building approval", StartDate = new DateTime(2025, 04, 12), Duration = "5", ParentId = 5 },
                new TaskInfoModel() { TaskId = 11, TaskName = "Construction initiation", StartDate = new DateTime(2025, 04, 01), Duration = "5", Progress=40 },
                new TaskInfoModel() { TaskId = 12, TaskName = "Ground floor initiation", StartDate = new DateTime(2025, 04, 05), Duration = "5", ParentId = 11, Progress=40},
                new TaskInfoModel() { TaskId = 13, TaskName = "First floor initiation", StartDate = new DateTime(2025, 04, 05), Duration = "7",ParentId = 11, Progress=40},
                new TaskInfoModel() { TaskId = 14, TaskName = "Electric work initiation", StartDate = new DateTime(2025, 04, 01), Duration = "5", ParentId = 11, Progress=40, },
                new TaskInfoModel() { TaskId = 15, TaskName = "Plumbing work", StartDate = new DateTime(2025, 04, 02), Duration = "5", ParentId = 11, Progress=40 },
            };
        }
        public static List<TaskInfoModel> GetVirtualData()
        {
            List<TaskInfoModel> Tasks = new List<TaskInfoModel>() {
            new TaskInfoModel() { TaskId = 1, TaskName = "Planning and Permits", StartDate = new DateTime(2025, 04, 02), EndDate = new DateTime(2025, 04, 10), Duration = "7 days", Progress = 100 },
            new TaskInfoModel() { TaskId = 2, TaskName = "Site Evaluation", StartDate = new DateTime(2025, 04, 02), EndDate = new DateTime(2025, 04, 04), Duration = "2 days", Progress = 100, ParentId = 1 },
            new TaskInfoModel() { TaskId = 3, TaskName = "Obtain Permits", StartDate = new DateTime(2025, 04, 07), EndDate = new DateTime(2025, 04, 09), Duration = "3 days", Progress = 100, ParentId = 1, Predecessor = "2" },
            new TaskInfoModel() { TaskId = 4, TaskName = "Finalize Planning", StartDate = new DateTime(2025, 04, 10), EndDate = new DateTime(2025, 04, 11), Duration = "2 days", Progress = 100, ParentId = 1, Predecessor = "3" },
            new TaskInfoModel() { TaskId = 5, TaskName = "Site Preparation", StartDate = new DateTime(2025, 04, 14), EndDate = new DateTime(2025, 04, 18), Duration = "5 days", Progress = 100,  },
            new TaskInfoModel() { TaskId = 6, TaskName = "Site Clearing", StartDate = new DateTime(2025, 04, 14), Duration = "0", Progress = 100, ParentId = 5, Predecessor = "4",},
            new TaskInfoModel() { TaskId = 7, TaskName = "Grading and Excavation", StartDate = new DateTime(2025, 04, 15), EndDate = new DateTime(2025, 04, 17), Duration = "3 days", Progress = 100, ParentId = 5, Predecessor = "6" },
            new TaskInfoModel() { TaskId = 8, TaskName = "Foundation Work", StartDate = new DateTime(2025, 04, 18), EndDate = new DateTime(2025, 04, 21), Duration = "4 days", Progress = 100, ParentId = 5, Predecessor = "7" }, // Completed
            new TaskInfoModel() { TaskId = 9, TaskName = "Foundation and Basement", StartDate = new DateTime(2025, 04, 22), EndDate = new DateTime(2025, 04, 28), Duration = "5 days", Progress = 100, ParentId = 5 }, // Completed
            new TaskInfoModel() { TaskId = 10, TaskName = "Pour Foundation", StartDate = new DateTime(2025, 04, 22), EndDate = new DateTime(2025, 04, 23), Duration = "2 days", Progress = 100, ParentId = 9, Predecessor = "8" }, // Completed
            new TaskInfoModel() { TaskId = 11, TaskName = "Cure Foundation", StartDate = new DateTime(2025, 04, 24), EndDate = new DateTime(2025, 04, 25), Duration = "2 days", Progress = 100, ParentId = 9, Predecessor = "10" }, // Completed
            new TaskInfoModel() { TaskId = 12, TaskName = "Basement Walls", StartDate = new DateTime(2025, 04, 28), EndDate = new DateTime(2025, 04, 30), Duration = "3 days", Progress = 100, ParentId = 9, Predecessor = "11" }, // Completed
            new TaskInfoModel() { TaskId = 13, TaskName = "Framing", StartDate = new DateTime(2025, 05, 01), EndDate = new DateTime(2025, 05, 07), Duration = "5 days", Progress = 100 }, // Completed
            new TaskInfoModel() { TaskId = 14, TaskName = "Frame Floors", StartDate = new DateTime(2025, 05, 01), EndDate = new DateTime(2025, 05, 02), Duration = "2 days", Progress = 100, ParentId = 13, Predecessor = "12" },
            new TaskInfoModel() { TaskId = 15, TaskName = "Frame Walls", StartDate = new DateTime(2025, 05, 05), EndDate = new DateTime(2025, 05, 06), Duration = "2 days", Progress = 100, ParentId = 13, Predecessor = "14" },
            new TaskInfoModel() { TaskId = 16, TaskName = "Install Trusses", StartDate = new DateTime(2025, 05, 07), EndDate = new DateTime(2025, 05, 08), Duration = "2 days", Progress = 100, ParentId = 13, Predecessor = "15" },
            new TaskInfoModel() { TaskId = 17, TaskName = "Roofing", StartDate = new DateTime(2025, 05, 09), EndDate = new DateTime(2025, 05, 13), Duration = "3 days", Progress = 100, Predecessor = "16" },
            new TaskInfoModel() { TaskId = 18, TaskName = "Mechanical, Electrical, Plumbing", StartDate = new DateTime(2025, 05, 14), EndDate = new DateTime(2025, 05, 24), Duration = "9 days", Progress = 50 },
            new TaskInfoModel() { TaskId = 19, TaskName = "HVAC Installation", StartDate = new DateTime(2025, 05, 14), EndDate = new DateTime(2025, 05, 16), Duration = "3 days", Progress = 100, ParentId = 18, Predecessor = "17" },
            new TaskInfoModel() { TaskId = 20, TaskName = "Plumbing Installation", StartDate = new DateTime(2025, 05, 19), EndDate = new DateTime(2025, 05, 21), Duration = "3 days", Progress = 50, ParentId = 18, Predecessor = "19" },
            new TaskInfoModel() { TaskId = 21, TaskName = "Electrical Installation", StartDate = new DateTime(2025, 05, 22), EndDate = new DateTime(2025, 05, 24), Duration = "3 days", Progress = 0, ParentId = 18, Predecessor = "20" },
            new TaskInfoModel() { TaskId = 22, TaskName = "Interior Finishing", StartDate = new DateTime(2025, 05, 26), EndDate = new DateTime(2025, 06, 17), Duration = "15 days", Progress = 0, Predecessor = "21" },
            new TaskInfoModel() { TaskId = 23, TaskName = "Insulation and Drywall", StartDate = new DateTime(2025, 05, 26), EndDate = new DateTime(2025, 05, 30), Duration = "5 days", Progress = 0, ParentId = 22, Predecessor = "21" },
            new TaskInfoModel() { TaskId = 24, TaskName = "Interior Painting", StartDate = new DateTime(2025, 06, 02), EndDate = new DateTime(2025, 06, 05), Duration = "4 days", Progress = 0, ParentId = 22, Predecessor = "23" },
            new TaskInfoModel() { TaskId = 25, TaskName = "Flooring Installation", StartDate = new DateTime(2025, 06, 06), EndDate = new DateTime(2025, 06, 09), Duration = "4 days", Progress = 0, ParentId = 22, Predecessor = "24" },
            new TaskInfoModel() { TaskId = 26, TaskName = "Cabinet and fixture setup", StartDate = new DateTime(2025, 06, 10), EndDate = new DateTime(2025, 06, 12), Duration = "3 days", Progress = 0, ParentId = 22, Predecessor = "25" }, // Not started
            new TaskInfoModel() { TaskId = 27, TaskName = "Final fixture installation", StartDate = new DateTime(2025, 06, 13), EndDate = new DateTime(2025, 06, 15), Duration = "3 days", Progress = 0, ParentId = 22, Predecessor = "26" }, // Not started
            new TaskInfoModel() { TaskId = 28, TaskName = "Exterior finishing", StartDate = new DateTime(2025, 06, 16), EndDate = new DateTime(2025, 06, 19), Duration = "4 days", Progress = 0, Predecessor = "27" }, // Not started
            new TaskInfoModel() { TaskId = 29, TaskName = "Landscaping", StartDate = new DateTime(2025, 06, 20), EndDate = new DateTime(2025, 06, 25), Duration = "5 days", Progress = 0, Predecessor = "28" }, // Not started
            new TaskInfoModel() { TaskId = 30, TaskName = "Final inspection", StartDate = new DateTime(2025, 06, 26), EndDate = new DateTime(2025, 06, 30), Duration = "3 days", Progress = 0, Predecessor = "29" }, // Not started
            new TaskInfoModel() { TaskId = 31, TaskName = "Correction of issues", StartDate = new DateTime(2025, 07, 01), EndDate = new DateTime(2025, 07, 03), Duration = "3 days", Progress = 0, Predecessor = "30" }, // Not started
            new TaskInfoModel() { TaskId = 32, TaskName = "Final walkthrough", StartDate = new DateTime(2025, 07, 04), EndDate = new DateTime(2025, 07, 07), Duration = "2 days", Progress = 0, Predecessor = "31" }, // Not started
            new TaskInfoModel() { TaskId = 33, TaskName = "Handover preparation", StartDate = new DateTime(2025, 07, 08), EndDate = new DateTime(2025, 07, 10), Duration = "3 days", Progress = 0, Predecessor = "32" }, // Not started
            new TaskInfoModel() { TaskId = 34, TaskName = "Client handover", StartDate = new DateTime(2025, 07, 11), EndDate = new DateTime(2025, 07, 12), Duration = "2 days", Progress = 0, Predecessor = "33" }, // Not started
            new TaskInfoModel() { TaskId = 35, TaskName = "Warranty period begins", StartDate = new DateTime(2025, 07, 14), EndDate = new DateTime(2025, 07, 15), Duration = "2 days", Progress = 0, Predecessor = "34" }, // Not started
            new TaskInfoModel() { TaskId = 36, TaskName = "Routine maintenance visits", StartDate = new DateTime(2025, 07, 16), EndDate = new DateTime(2025, 07, 25), Duration = "10 days", Progress = 0, Predecessor = "35" }, // Not started
            new TaskInfoModel() { TaskId = 37, TaskName = "First year warranty review", StartDate = new DateTime(2025, 07, 28), EndDate = new DateTime(2025, 08, 01), Duration = "5 days", Progress = 0, Predecessor = "36" }, // Not started
            new TaskInfoModel() { TaskId = 38, TaskName = "Final project documentation", StartDate = new DateTime(2025, 08, 04), EndDate = new DateTime(2025, 08, 06), Duration = "3 days", Progress = 0, Predecessor = "37" }, // Not started
            new TaskInfoModel() { TaskId = 39, TaskName = "Celebrate project completion", StartDate = new DateTime(2025, 08, 07), EndDate = new DateTime(2025, 08, 09), Duration = "3 days", Progress = 0, Predecessor = "38" }, // Not started
            new TaskInfoModel() { TaskId = 40, TaskName = "Begin next project planning", StartDate = new DateTime(2025, 08, 10), EndDate = new DateTime(2025, 08, 13), Duration = "4 days", Progress = 0, Predecessor = "39" } // Not started
            };
            return Tasks;
        }
        public static List<TaskInfoModel> GetUnScheduledTaskCollection()
        {
            List<TaskInfoModel> tasks = new List<TaskInfoModel>()
            {
                new TaskInfoModel() { TaskId = 1, TaskName = "Project Initiation Phase", IsManual = false,Duration="5" },
                new TaskInfoModel() { TaskId = 2, TaskName = "Requirement Gathering", ParentId = 1, TaskType = TaskType.FixedDuration, Duration="2", Work=16, IsManual = false },
                new TaskInfoModel() { TaskId = 3, TaskName = "Feasibility Study", ParentId = 1, StartDate = new DateTime(2025,12,26), TaskType = TaskType.FixedWork, Duration="3", Work=24, IsManual = false },
                new TaskInfoModel() { TaskId = 4, TaskName = "Resource Planning", ParentId = 1, EndDate = new DateTime(2025,12,29), TaskType = TaskType.FixedUnit, Work=20, IsManual = false },
                new TaskInfoModel() { TaskId = 5, TaskName = "Milestone Approval (FD)", ParentId = 1, StartDate = new DateTime(2025,12,26), Work=0, TaskType = TaskType.FixedDuration, IsManual = false },
                new TaskInfoModel() { TaskId = 6, TaskName = "Milestone Approval (FW)", ParentId = 1, Duration="0", Work=0, TaskType = TaskType.FixedWork, IsManual = false },
                new TaskInfoModel() { TaskId = 7, TaskName = "Milestone Approval (FU)", ParentId = 1, Duration="0", Work=0, TaskType = TaskType.FixedUnit, IsManual = false },

                new TaskInfoModel() { TaskId = 8, TaskName = "Design Phase", IsManual = true,Duration="5" },
                new TaskInfoModel() { TaskId = 9, TaskName = "Architecture Design", ParentId = 8, TaskType = TaskType.FixedDuration, Duration="2", Work=16, IsManual = true },
                new TaskInfoModel() { TaskId = 10, TaskName = "System Specification", ParentId = 8, StartDate = new DateTime(2025,12,26), TaskType = TaskType.FixedWork, Duration="3", Work=24, IsManual = true },
                new TaskInfoModel() { TaskId = 11, TaskName = "Resource Allocation", ParentId = 8, EndDate = new DateTime(2025,12,29), TaskType = TaskType.FixedUnit, Work=20, IsManual = true },
                new TaskInfoModel() { TaskId = 12, TaskName = "Design Approval (FD)", ParentId = 8, StartDate = new DateTime(2025,12,26), Work=0, TaskType = TaskType.FixedDuration, IsManual = true },
                new TaskInfoModel() { TaskId = 13, TaskName = "Design Approval (FW)", ParentId = 8, Duration="0", Work=0, TaskType = TaskType.FixedWork, IsManual = true },
                new TaskInfoModel() { TaskId = 14, TaskName = "Design Approval (FU)", ParentId = 8, Duration="0", Work=0, TaskType = TaskType.FixedUnit, IsManual = true },
                new TaskInfoModel() { TaskId = 15, TaskName = "Development Phase", IsManual = true, Duration="5" },
            };
            return tasks;
        }
    }
}