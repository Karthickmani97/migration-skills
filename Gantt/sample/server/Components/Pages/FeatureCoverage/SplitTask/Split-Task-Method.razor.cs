using Syncfusion.Blazor.Gantt;
using System.Dynamic;
namespace SyncfusionBlazorApp.Components.Pages.FeatureCoverage.SplitTask
{
    public partial class Split_Task_Method
    {
        private SfGantt<TaskDataInt> GanttInt;
        private SfGantt<TaskDataString> GanttString;
        private SfGantt<TaskDataObject> GanttObject;
        private SfGantt<TaskDataGuid> GanttGuid;
        private SfGantt<ExpandoObject> GanttExpando;
        private SfGantt<DynamicDictionary> GanttDynamic;
        private SfGantt<TaskDataInt> GanttCustomAdaptor;
        private static List<TaskDataInt> TaskCollectionInt { get; set; }
        private List<SegmentModelInt> SegmentCollectionInt { get; set; }
        private List<TaskDataObject> TaskCollectionObject { get; set; }
        private List<SegmentModelObject> SegmentCollectionObject { get; set; }
        private List<TaskDataString> TaskCollectionString { get; set; }
        private List<SegmentModelString> SegmentCollectionString { get; set; }
        private List<TaskDataGuid> TaskCollectionGuid { get; set; }
        private List<SegmentModelGuid> SegmentCollectionGuid { get; set; }
        private List<ExpandoObject> TaskCollectionExpando { get; set; }
        private List<DynamicDictionary> TaskCollectionDynamic { get; set; }
        private string selectedIdType = "int";
        private string currentDataType = string.Empty;
        private DateTime ProjectStartDate = new DateTime(2022, 03, 28);
        private DateTime ProjectEndDate = new DateTime(2022, 07, 28);

        private List<string> IdTypes = new List<string> { "int", "object", "string", "guid", "expando", "dynamic object", "custom adaptor", "AddRecordAsync", "UpdateRecordbyIdAsync", "DeleteRecordAsync", "UpdatePredecessor", "AddPredecessor", "RemovePredecessor" };

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

        private async void UpdateCollectionsBasedOnIdType(string idType)
        {
            switch (idType)
            {
                case "int":
                    TaskCollectionInt = GetTaskCollectionInt();
                    SegmentCollectionInt = GetSegmentCollectionInt();
                    currentDataType = idType;
                    break;
                case "object":
                    TaskCollectionObject = GetTaskCollectionObject();
                    SegmentCollectionObject = GetSegmentCollectionObject();
                    currentDataType = idType;
                    break;
                case "string":
                    TaskCollectionString = GetTaskCollectionString();
                    SegmentCollectionString = GetSegmentCollectionString();
                    currentDataType = idType;
                    break;
                case "guid":
                    TaskCollectionGuid = GetTaskCollectionGuid();
                    SegmentCollectionGuid = GetSegmentCollectionGuid();
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
                case "custom adaptor":
                    TaskCollectionInt = GetTaskCollectionInt();
                    SegmentCollectionInt = GetSegmentCollectionInt();
                    currentDataType = idType;
                    break;
                case "AddRecordAsync":
                    switch (currentDataType)
                    {
                        case "int":
                            TaskDataInt recordInt = new TaskDataInt() { TaskId = 16, TaskName = "New Task 16", StartDate = new DateTime(2022, 03, 29), Progress = 30, Duration = "8" };
                            await GanttInt.AddRecordAsync(recordInt);
                            break;
                        case "string":
                            TaskDataString recordString = new TaskDataString() { TaskId = "16", TaskName = "New Task 16", StartDate = new DateTime(2022, 03, 29), Progress = 30, Duration = "8" };
                            await GanttString.AddRecordAsync(recordString);
                            break;
                        case "object":
                            TaskDataObject recordObject = new TaskDataObject() { TaskId = 16, TaskName = "New Task 16", StartDate = new DateTime(2022, 03, 29), Progress = 30, Duration = "8" };
                            await GanttObject.AddRecordAsync(recordObject);
                            break;
                        case "guid":
                            TaskDataGuid recordGuid = new TaskDataGuid() { TaskId = Guid.NewGuid(), TaskName = "New Task 16", StartDate = new DateTime(2022, 03, 29), Progress = 30, Duration = "8" };
                            await GanttGuid.AddRecordAsync(recordGuid);
                            break;
                    }
                    break;
                case "UpdateRecordbyIdAsync":
                    switch (currentDataType)
                    {
                        case "int":
                            var recordInt = await GanttInt.GetSelectedRecordsAsync();
                            DateTime dateTime = (DateTime)recordInt[0].StartDate;
                            recordInt[0].StartDate = dateTime.AddDays(1);
                            recordInt[0].Duration = "5";
                            await GanttInt.UpdateRecordByIDAsync(recordInt[0]);
                            break;
                        case "string":
                            var recordString = await GanttString.GetSelectedRecordsAsync();
                            DateTime dateTimeString = (DateTime)recordString[0].StartDate;
                            recordString[0].StartDate = dateTimeString.AddDays(1);
                            recordString[0].Duration = "5";
                            await GanttString.UpdateRecordByIDAsync(recordString[0]);
                            break;
                        case "object":
                            var recordObject = await GanttObject.GetSelectedRecordsAsync();
                            DateTime dateTimeObject = (DateTime)recordObject[0].StartDate;
                            recordObject[0].StartDate = dateTimeObject.AddDays(1);
                            recordObject[0].Duration = "5";
                            await GanttObject.UpdateRecordByIDAsync(recordObject[0]);
                            break;
                        case "guid":
                            var recordGuid = await GanttGuid.GetSelectedRecordsAsync();
                            DateTime dateTimeGuid = (DateTime)recordGuid[0].StartDate;
                            recordGuid[0].StartDate = dateTimeGuid.AddDays(1);
                            recordGuid[0].Duration = "5";
                            await GanttGuid.UpdateRecordByIDAsync(recordGuid[0]);
                            break;
                    }
                    break;
                case "DeleteRecordAsync":
                    switch (currentDataType)
                    {
                        case "int":
                            var recordInt = await GanttInt.GetSelectedRecordsAsync();
                            await GanttInt.DeleteRecordAsync(recordInt[0].TaskId);
                            break;
                        case "string":
                            var recordString = await GanttString.GetSelectedRecordsAsync();
                            await GanttString.DeleteRecordAsync(recordString[0].TaskId);
                            break;
                        case "guid":
                            var recordGuid = await GanttGuid.GetSelectedRecordsAsync();
                            await GanttGuid.DeleteRecordAsync(recordGuid[0].TaskId);
                            break;
                    }
                    break;
                case "UpdatePredecessor":
                    switch (currentDataType)
                    {
                        case "int":
                            GanttInt.UpdatePredecessor(4, "3FS");
                            break;
                        case "string":
                            GanttString.UpdatePredecessor("4", "3FS");
                            break;
                        case "guid":
                            GanttGuid.UpdatePredecessor(predefinedGuids[3], "3FS");
                            break;
                    }
                    break;
                case "AddPredecessor":
                    switch (currentDataType)
                    {
                        case "int":
                            GanttInt.AddPredecessor(5, "3FS");
                            break;
                        case "string":
                            GanttString.AddPredecessor("5", "3FS");
                            break;
                        case "guid":
                            GanttGuid.AddPredecessor(predefinedGuids[4], "3FS");
                            break;
                    }
                    break;
                case "RemovePredecessor":
                    switch (currentDataType)
                    {
                        case "int":
                            GanttInt.RemovePredecessor(4);
                            break;
                        case "string":
                            GanttString.RemovePredecessor("4");
                            break;
                        case "guid":
                            GanttGuid.RemovePredecessor(predefinedGuids[3]);
                            break;
                    }
                    break;
                default:
                    break;
            }
        }

        private List<TaskDataInt> GetTaskCollectionInt()
        {
            return new List<TaskDataInt>
            {
                new TaskDataInt() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2022, 03, 28), EndDate = new DateTime(2022, 07, 28), Duration="4" },
                new TaskDataInt() { TaskId = 2, TaskName = "Identify site location", StartDate = new DateTime(2022, 03, 29), Progress = 30, ParentId = 1, Duration="8", },
                new TaskDataInt() { TaskId = 3, TaskName = "Site analyze", StartDate = new DateTime(2022, 03, 29),  Progress = 50, ParentId = 1, Duration="8"},
                new TaskDataInt() { TaskId = 4, TaskName = "Perform soil test", StartDate = new DateTime(2022, 03, 29), ParentId = 1, Duration="5", Predecessor="2FS", Progress=40, },
                new TaskDataInt() { TaskId = 5, TaskName = "Soil test approval", StartDate = new DateTime(2022, 03, 29), Duration="4", Progress = 30 },
                new TaskDataInt() { TaskId = 6, TaskName = "Project estimation", StartDate = new DateTime(2022, 04, 08), Duration="8", Progress=40, ParentId=1 },
                new TaskDataInt() { TaskId = 7, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2022, 03, 29), Duration = "0", Progress = 30, ParentId = 5, Predecessor= "4FS" },
                new TaskDataInt() { TaskId = 8, TaskName = "List materials", StartDate = new DateTime(2022, 04, 01), Duration = "6", Progress = 30, ParentId = 5 },
                new TaskDataInt() { TaskId = 9, TaskName = "Estimation approval",Progress=30, StartDate = new DateTime(2022, 04, 01), Duration = "4", ParentId = 5, Predecessor="8FS" },
                new TaskDataInt() { TaskId = 10, TaskName = "Building approval", StartDate = new DateTime(2022, 04, 12), Duration = "5", ParentId = 5 },
                new TaskDataInt() { TaskId = 11, TaskName = "Construction initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", Progress=40 },
                new TaskDataInt() { TaskId = 12, TaskName = "Ground floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "5", ParentId = 11, Progress=40},
                new TaskDataInt() { TaskId = 13, TaskName = "First floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "7",ParentId = 11, Progress=40},
                new TaskDataInt() { TaskId = 14, TaskName = "Electric work initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", ParentId = 11, Progress=40, },
                new TaskDataInt() { TaskId = 15, TaskName = "Plumbing work", StartDate = new DateTime(2022, 04, 02), Duration = "5", ParentId = 11, Progress=40 },
            };
        }

        private List<SegmentModelInt> GetSegmentCollectionInt()
        {
            List<SegmentModelInt> segments = new List<SegmentModelInt>();
            segments.Add(new SegmentModelInt() { id = 1, TaskId = 2, StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 2, TaskId = 2, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelInt() { id = 3, TaskId = 3, StartDate = new DateTime(2022, 04, 01), Duration = "2" });
            segments.Add(new SegmentModelInt() { id = 4, TaskId = 3, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelInt() { id = 5, TaskId = 3, StartDate = new DateTime(2022, 04, 04), Duration = "3" });
            segments.Add(new SegmentModelInt() { id = 6, TaskId = 4, StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 7, TaskId = 4, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelInt() { id = 8, TaskId = 8, StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 03) });
            segments.Add(new SegmentModelInt() { id = 9, TaskId = 8, StartDate = new DateTime(2022, 04, 05), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 10, TaskId = 9, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelInt() { id = 11, TaskId = 9, StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 12, TaskId = 12, StartDate = new DateTime(2022, 04, 05), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 13, TaskId = 12, StartDate = new DateTime(2022, 04, 07), Duration = "1" });
            segments.Add(new SegmentModelInt() { id = 14, TaskId = 14, StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 02) });
            segments.Add(new SegmentModelInt() { id = 15, TaskId = 14, StartDate = new DateTime(2022, 04, 04), Duration = "2" });
            return segments;
        }


        private List<TaskDataObject> GetTaskCollectionObject()
        {
            var collection = new List<TaskDataObject>
            {
                new TaskDataObject() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2022, 03, 28), EndDate = new DateTime(2022, 07, 28), Duration="4" },
                new TaskDataObject() { TaskId = 2, TaskName = "Identify site location", StartDate = new DateTime(2022, 03, 29), Progress = 30, ParentId = 1, Duration="8", },
                new TaskDataObject() { TaskId = 3, TaskName = "Site analyze", StartDate = new DateTime(2022, 03, 29),  Progress = 50, ParentId = 1, Duration="8"},
                new TaskDataObject() { TaskId = 4, TaskName = "Perform soil test", StartDate = new DateTime(2022, 03, 29), ParentId = 1, Duration="5", Predecessor="2FS", Progress=40, },
                new TaskDataObject() { TaskId = 5, TaskName = "Soil test approval", StartDate = new DateTime(2022, 03, 29), Duration="4", Progress = 30 },
                new TaskDataObject() { TaskId = 6, TaskName = "Project estimation", StartDate = new DateTime(2022, 04, 08), Duration="8", Progress=40, ParentId=1 },
                new TaskDataObject() { TaskId = 7, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2022, 03, 29), Duration = "0", Progress = 30, ParentId = 5, Predecessor= "4FS" },
                new TaskDataObject() { TaskId = 8, TaskName = "List materials", StartDate = new DateTime(2022, 04, 01), Duration = "6", Progress = 30, ParentId = 5 },
                new TaskDataObject() { TaskId = 9, TaskName = "Estimation approval",Progress=30, StartDate = new DateTime(2022, 04, 01), Duration = "4", ParentId = 5, Predecessor="8FS" },
                new TaskDataObject() { TaskId = 10, TaskName = "Building approval", StartDate = new DateTime(2022, 04, 12), Duration = "5", ParentId = 5 },
                new TaskDataObject() { TaskId = 11, TaskName = "Construction initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", Progress=40 },
                new TaskDataObject() { TaskId = 12, TaskName = "Ground floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "5", ParentId = 11, Progress=40},
                new TaskDataObject() { TaskId = 13, TaskName = "First floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "7",ParentId = 11, Progress=40},
                new TaskDataObject() { TaskId = 14, TaskName = "Electric work initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", ParentId = 11, Progress=40, },
                new TaskDataObject() { TaskId = 15, TaskName = "Plumbing work", StartDate = new DateTime(2022, 04, 02), Duration = "5", ParentId = 11, Progress=40 },
            };

            return collection;
        }

        private List<SegmentModelObject> GetSegmentCollectionObject()
        {
            List<SegmentModelObject> segments = new List<SegmentModelObject>();
            segments.Add(new SegmentModelObject() { id = 1, TaskId = 2, StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelObject() { id = 2, TaskId = 2, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelObject() { id = 3, TaskId = 3, StartDate = new DateTime(2022, 04, 01), Duration = "2" });
            segments.Add(new SegmentModelObject() { id = 4, TaskId = 3, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelObject() { id = 5, TaskId = 3, StartDate = new DateTime(2022, 04, 04), Duration = "3" });
            segments.Add(new SegmentModelObject() { id = 6, TaskId = 4, StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelObject() { id = 7, TaskId = 4, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelObject() { id = 8, TaskId = 8, StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 03) });
            segments.Add(new SegmentModelObject() { id = 9, TaskId = 8, StartDate = new DateTime(2022, 04, 05), Duration = "1" });
            segments.Add(new SegmentModelObject() { id = 10, TaskId = 9, StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelObject() { id = 11, TaskId = 9, StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelObject() { id = 12, TaskId = 12, StartDate = new DateTime(2022, 04, 05), Duration = "1" });
            segments.Add(new SegmentModelObject() { id = 13, TaskId = 12, StartDate = new DateTime(2022, 04, 07), Duration = "1" });
            segments.Add(new SegmentModelObject() { id = 14, TaskId = 14, StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 02) });
            segments.Add(new SegmentModelObject() { id = 15, TaskId = 14, StartDate = new DateTime(2022, 04, 04), Duration = "2" });
            return segments;
        }


        private List<TaskDataString> GetTaskCollectionString()
        {
            var collection = new List<TaskDataString>
            {
                new TaskDataString() { TaskId = "1", TaskName = "Project initiation", StartDate = new DateTime(2022, 03, 28), EndDate = new DateTime(2022, 07, 28), Duration="4" },
                new TaskDataString() { TaskId = "2", TaskName = "Identify site location", StartDate = new DateTime(2022, 03, 29), Progress = 30, ParentId = "1", Duration="8", },
                new TaskDataString() { TaskId = "3", TaskName = "Site analyze", StartDate = new DateTime(2022, 03, 29),  Progress = 50, ParentId = "1", Duration="8"},
                new TaskDataString() { TaskId = "4", TaskName = "Perform soil test", StartDate = new DateTime(2022, 03, 29), ParentId = "1", Duration="5", Predecessor="2FS", Progress=40, },
                new TaskDataString() { TaskId = "5", TaskName = "Soil test approval", StartDate = new DateTime(2022, 03, 29), Duration="4", Progress = 30 },
                new TaskDataString() { TaskId = "6", TaskName = "Project estimation", StartDate = new DateTime(2022, 04, 08), Duration="8", Progress=40, ParentId="1" },
                new TaskDataString() { TaskId = "7", TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2022, 03, 29), Duration = "0", Progress = 30, ParentId = "5", Predecessor= "4FS" },
                new TaskDataString() { TaskId = "8", TaskName = "List materials", StartDate = new DateTime(2022, 04, 01), Duration = "6", Progress = 30, ParentId = "5" },
                new TaskDataString() { TaskId = "9", TaskName = "Estimation approval",Progress=30, StartDate = new DateTime(2022, 04, 01), Duration = "4", ParentId = "5", Predecessor="8FS" },
                new TaskDataString() { TaskId = "10", TaskName = "Building approval", StartDate = new DateTime(2022, 04, 12), Duration = "5", ParentId = "5" },
                new TaskDataString() { TaskId = "11", TaskName = "Construction initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", Progress=40 },
                new TaskDataString() { TaskId = "12", TaskName = "Ground floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "5", ParentId = "11", Progress=40},
                new TaskDataString() { TaskId = "13", TaskName = "First floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "7",ParentId = "11", Progress=40},
                new TaskDataString() { TaskId = "14", TaskName = "Electric work initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", ParentId = "11", Progress=40, },
                new TaskDataString() { TaskId = "15", TaskName = "Plumbing work", StartDate = new DateTime(2022, 04, 02), Duration = "5", ParentId = "11", Progress=40 },
            };

            return collection;
        }

        private List<SegmentModelString> GetSegmentCollectionString()
        {
            List<SegmentModelString> segments = new List<SegmentModelString>();
            segments.Add(new SegmentModelString() { id = "1", TaskId = "2", StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelString() { id = "2", TaskId = "2", StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelString() { id = "3", TaskId = "3", StartDate = new DateTime(2022, 04, 01), Duration = "2" });
            segments.Add(new SegmentModelString() { id = "4", TaskId = "3", StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelString() { id = "5", TaskId = "3", StartDate = new DateTime(2022, 04, 04), Duration = "3" });
            segments.Add(new SegmentModelString() { id = "6", TaskId = "4", StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelString() { id = "7", TaskId = "4", StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelString() { id = "8", TaskId = "8", StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 03) });
            segments.Add(new SegmentModelString() { id = "9", TaskId = "8", StartDate = new DateTime(2022, 04, 05), Duration = "1" });
            segments.Add(new SegmentModelString() { id = "10", TaskId = "9", StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) });
            segments.Add(new SegmentModelString() { id = "11", TaskId = "9", StartDate = new DateTime(2022, 04, 01), Duration = "1" });
            segments.Add(new SegmentModelString() { id = "12", TaskId = "12", StartDate = new DateTime(2022, 04, 05), Duration = "1" });
            segments.Add(new SegmentModelString() { id = "13", TaskId = "12", StartDate = new DateTime(2022, 04, 07), Duration = "1" });
            segments.Add(new SegmentModelString() { id = "14", TaskId = "14", StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 02) });
            segments.Add(new SegmentModelString() { id = "15", TaskId = "14", StartDate = new DateTime(2022, 04, 04), Duration = "2" });
            return segments;
        }

        private List<Guid> predefinedGuids = new List<Guid>
        {
            Guid.Parse("00000000-0000-0000-0000-000000000001"),
            Guid.Parse("00000000-0000-0000-0000-000000000002"),
            Guid.Parse("00000000-0000-0000-0000-000000000003"),
            Guid.Parse("00000000-0000-0000-0000-000000000004"),
            Guid.Parse("00000000-0000-0000-0000-000000000005"),
            Guid.Parse("00000000-0000-0000-0000-000000000006"),
            Guid.Parse("00000000-0000-0000-0000-000000000007"),
            Guid.Parse("00000000-0000-0000-0000-000000000008"),
            Guid.Parse("00000000-0000-0000-0000-000000000009"),
            Guid.Parse("00000000-0000-0000-0000-000000000010"),
            Guid.Parse("00000000-0000-0000-0000-000000000011"),
            Guid.Parse("00000000-0000-0000-0000-000000000012"),
            Guid.Parse("00000000-0000-0000-0000-000000000013"),
            Guid.Parse("00000000-0000-0000-0000-000000000014"),
            Guid.Parse("00000000-0000-0000-0000-000000000015"),
        };

        private List<TaskDataGuid> GetTaskCollectionGuid()
        {
            List<TaskDataGuid> tasks = new List<TaskDataGuid>
            {
                new TaskDataGuid() { TaskId = predefinedGuids[0], TaskName = "Project initiation", StartDate = new DateTime(2022, 03, 28), EndDate = new DateTime(2022, 07, 28), Duration="4" },
                new TaskDataGuid() { TaskId = predefinedGuids[1], TaskName = "Identify site location", StartDate = new DateTime(2022, 03, 29), Progress = 30, ParentId = predefinedGuids[0], Duration="8" },
                new TaskDataGuid() { TaskId = predefinedGuids[2], TaskName = "Site analyze", StartDate = new DateTime(2022, 03, 29), Progress = 50, ParentId = predefinedGuids[0], Duration="8" },
                new TaskDataGuid() { TaskId = predefinedGuids[3], TaskName = "Perform soil test", StartDate = new DateTime(2022, 03, 29), ParentId = predefinedGuids[0], Duration="5", Predecessor=predefinedGuids[1].ToString()+"FS", Progress=40 },
                new TaskDataGuid() { TaskId = predefinedGuids[4], TaskName = "Soil test approval", StartDate = new DateTime(2022, 03, 29), Duration="4", Progress = 30 },
                new TaskDataGuid() { TaskId = predefinedGuids[5], TaskName = "Project estimation", StartDate = new DateTime(2022, 04, 08), Duration="8", Progress=40, ParentId=predefinedGuids[0] },
                new TaskDataGuid() { TaskId = predefinedGuids[6], TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2022, 03, 29), Duration = "0", Progress = 30, ParentId = predefinedGuids[4], Predecessor= predefinedGuids[3].ToString()+"FS" },
                new TaskDataGuid() { TaskId = predefinedGuids[7], TaskName = "List materials", StartDate = new DateTime(2022, 04, 01), Duration = "6", Progress = 30, ParentId = predefinedGuids[4] },
                new TaskDataGuid() { TaskId = predefinedGuids[8], TaskName = "Estimation approval", Progress=30, StartDate = new DateTime(2022, 04, 01), Duration = "4", ParentId = predefinedGuids[4], Predecessor=predefinedGuids[7].ToString()+"FS" },
                new TaskDataGuid() { TaskId = predefinedGuids[9], TaskName = "Building approval", StartDate = new DateTime(2022, 04, 12), Duration = "5", ParentId = predefinedGuids[4] },
                new TaskDataGuid() { TaskId = predefinedGuids[10], TaskName = "Construction initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", Progress=40 },
                new TaskDataGuid() { TaskId = predefinedGuids[11], TaskName = "Ground floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "5", ParentId = predefinedGuids[10], Progress=40 },
                new TaskDataGuid() { TaskId = predefinedGuids[12], TaskName = "First floor initiation", StartDate = new DateTime(2022, 04, 05), Duration = "7", ParentId = predefinedGuids[10], Progress=40 },
                new TaskDataGuid() { TaskId = predefinedGuids[13], TaskName = "Electric work initiation", StartDate = new DateTime(2022, 04, 01), Duration = "5", ParentId = predefinedGuids[10], Progress=40 },
                new TaskDataGuid() { TaskId = predefinedGuids[14], TaskName = "Plumbing work", StartDate = new DateTime(2022, 04, 02), Duration = "5", ParentId = predefinedGuids[10], Progress=40 },
            };
            return tasks;
        }

        private List<SegmentModelGuid> GetSegmentCollectionGuid()
        {
            List<SegmentModelGuid> segments = new List<SegmentModelGuid>
            {
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[1], StartDate = new DateTime(2022, 04, 01), Duration = "1" },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[1], StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[2], StartDate = new DateTime(2022, 04, 01), Duration = "2" },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[2], StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[2], StartDate = new DateTime(2022, 04, 04), Duration = "3" },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[3], StartDate = new DateTime(2022, 04, 01), Duration = "1" },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[3], StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[7], StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 03) },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[7], StartDate = new DateTime(2022, 04, 05), Duration = "1" },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[8], StartDate = new DateTime(2022, 03, 29), EndDate = new DateTime(2022, 03, 31) },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[8], StartDate = new DateTime(2022, 04, 01), Duration = "1" },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[11], StartDate = new DateTime(2022, 04, 05), Duration = "1" },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[11], StartDate = new DateTime(2022, 04, 07), Duration = "1" },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[13], StartDate = new DateTime(2022, 04, 01), EndDate = new DateTime(2022, 04, 02) },
                new SegmentModelGuid() { id = Guid.NewGuid(), TaskId = predefinedGuids[13], StartDate = new DateTime(2022, 04, 04), Duration = "2" },
            };
            return segments;
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
                DateTime start = new DateTime(2022, 03, 07);
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
                DateTime start = new DateTime(2022, 03, 07);
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
                DateTime start = new DateTime(2022, 03, 07);
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
                DateTime start = new DateTime(2022, 03, 07);
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
        public class SegmentModel
        {
            public int id { get; set; }
            public int TaskId { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public string Duration { get; set; }
        }
        public class TaskDataInt
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
        public class TaskDataObject
        {
            public object TaskId { get; set; }
            public string TaskName { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public object ParentId { get; set; }
            public string Duration { get; set; }
            public int Progress { get; set; }
            public string Predecessor { get; set; }
        }

        public class TaskDataString
        {
            public string TaskId { get; set; }
            public string TaskName { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public string ParentId { get; set; }
            public string Duration { get; set; }
            public int Progress { get; set; }
            public string Predecessor { get; set; }
        }

        public class SegmentModelInt
        {
            public int id { get; set; }
            public int TaskId { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public string Duration { get; set; }
        }

        public class SegmentModelObject
        {
            public object id { get; set; }
            public object TaskId { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public string Duration { get; set; }
        }

        public class SegmentModelString
        {
            public string id { get; set; }
            public string TaskId { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public string Duration { get; set; }
        }
        public class TaskDataGuid
        {
            public Guid TaskId { get; set; }
            public string TaskName { get; set; }
            public DateTime? StartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public string Duration { get; set; }
            public int Progress { get; set; }
            public Guid? ParentId { get; set; }
            public string Predecessor { get; set; }
        }

        public class SegmentModelGuid
        {
            public Guid id { get; set; }
            public Guid TaskId { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public string Duration { get; set; }
        }
    }
}
