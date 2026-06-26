using Syncfusion.Blazor;
using Syncfusion.Blazor.Gantt;
using Syncfusion.Blazor.Grids;
using SyncfusionBlazorApp.Data;
using static SyncfusionBlazorApp.Components.Pages.Gantt_Feature.GanttBase;
using static SyncfusionBlazorApp.Data.GanttDataModel;
using Gantt = Syncfusion.Blazor.Gantt;
namespace SyncfusionBlazorApp.Components.Pages.Gantt_Feature
{
    public partial class FeatureMatrix
    {
        private Dictionary<string, object> Parameters = new Dictionary<string, object>();
        internal FeatureParameters FeatureParams = new FeatureParameters();
        internal object? valueFromMethods { get; set; }
        public class FeatureParameters
        {
            public bool AllowExcelExport { get; set; }
            public bool AllowFiltering { get; set; }
            public bool AllowReordering { get; set; }
            public bool AllowResizing { get; set; }
            public bool AllowRowDragAndDrop { get; set; }
            public bool AllowSorting { get; set; }
            public bool AllowSelection { get; set; }
            public bool AllowUnscheduledTasks { get; set; }
            public string[] ColumnMenuItems { get; set; } = new string[] { };
            public bool RenderBaseline { get; set; }
            public bool HighlightWeekends { get; set; }
            public bool IncludeWeekend { get; set; }
            public bool ShowInlineNotes { get; set; }
            public bool ShowOverallocation { get; set; }
            public bool ShowColumnMenu { get; set; }
            public bool ShowColumnChooser { get; set; }
            public bool EnableRtl { get; set; }
            public bool EnableContextMenu { get; set; }
            public bool EnablePersistence { get; set; }
            public bool EnablePredecessorValidation { get; set; }
            public bool EnableCriticalPath { get; set; }
            public bool EnableRowVirtualization { get; set; }
            public bool EnableTimelineVirtualization { get; set; }
            public bool EnableColumnVirtualization { get; set; }
            public string Height { get; set; } = "450px";
            public string Width { get; set; } = "100%";
            public string[] WorkWeek { get; set; } = new string[] { "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" };
            public int RowHeight { get; set; } = 36;
            public string BaselineColor { get; set; } = "#FFA500";
            public DurationUnit DurationUnit { get; set; }
            public int? TaskbarHeight { get; set; }
            public bool LoadChildOnDemand { get; set; }
            public List<DependencyType> DependencyTypes { get; set; } = new List<DependencyType> { DependencyType.FS, DependencyType.SS, DependencyType.FF, DependencyType.SF };
            public int FrozenColumns { get; set; }
            public bool CollapseAllParentTasks { get; set; }
            public DateTime ProjectStartDate { get; set; }
            public DateTime ProjectEndDate { get; set; }
            public Gantt.GridLine GridLines { get; set; }
            public ViewType ViewType { get; set; }
            public object Toolbar { get; set; } = new List<string>() { "Add", "Edit", "Update", "Delete", "ZoomIn", "ZoomOut", "ZoomToFit" };
            public GanttZoomTimelineSettings[] CustomZoomingLevels { get; set; }
            public int TreeColumnIndex { get; set; }
            public List<GanttDataModel.CustomTaskDataModel> DataSource { get; set; } = GanttDataModel.GetBasicTaskCollection();
            public bool EditAllowAdding { get; set; }
            public bool EditAllowEditing { get; set; }
            public bool EditAllowDeleting { get; set; }
            public bool EditAllowTaskbarEditing { get; set; }

            public RowPosition EditRowPosition { get; set; } = RowPosition.Top;
            public bool EditShowConfirmDialog { get; set; }
            public Gantt.EditMode EditingMode { get; set; } = Gantt.EditMode.Auto;
            public bool EditAllowSchedulingOnDrag { get; set; }
            public bool TimelineSettingsShowTooltip { get; set; }
            public int TimelineSettingsUnitSize { get; set; } = 33;
            public TimelineViewMode TimelineSettingsViewMode { get; set; } = TimelineViewMode.Week;
            public int TimelineTopTierCount { get; set; } = 1;
            public string TimelineTopTierFormat { get; set; } = "MMM dd, yyyy";
            public TimelineViewMode TimelineTopTierUnit { get; set; } = TimelineViewMode.Week;
            public int TimelineBottomTierCount { get; set; } = 1;
            public string TimelineBottomTierFormat { get; set; } = "dd";
            public TimelineViewMode TimelineBottomTierUnit { get; set; } = TimelineViewMode.Day;
            public int TimelineWeekStartDay { get; set; } = 0;
            public bool TimelineUpdateTimescaleView { get; set; } = true;
            public bool IsHierarchy { get; set; } = false;
            public bool IsEditDialogFieldsEnable { get; set; } = false;
            public bool IsAddDialogFieldsEnable { get; set; } = false;
            public bool IsEventmarkersEnable { get; set; } = false;
            public bool IsHolidayEnable { get; set; } = false;
            public bool IsFilterSettingsEnable { get; set; } = false;
            public bool IsTaskLabelEnable { get; set; } = false;
            public bool IsSearchSettingsEnable { get; set; } = false;
            public bool EnableSortDescriptors { get; set; } = false;
            public bool IsTaskbarSettingsEnable { get; set; } = false;
            public bool IsSelectionSettingsEnable { get; set; } = false;
            public bool SplitterSettingsColumn { get; set; } = false;
            public bool IsTimelineSettingsEnable { get; set; } = false;
            public string SplitterPosition { get; set; } = "38%";
            public SelectionMode SelectionMode { get; set; } = SelectionMode.Both;
            public SelectionType SelectionType { get; set; } = SelectionType.Single;
            public Gantt.FilterHierarchyMode FilterHierarchyMode { get; set; } = Gantt.FilterHierarchyMode.None;
            public bool AllowDragSelection { get; set; } = false;
            public bool FilterIgnoreAccent { get; set; } = false;
            public bool SearchIgnoreAccent { get; set; } = false;
            public bool SearchIgnoreCase { get; set; } = false;
            public string RightLabel { get; set; } = "TaskName";
            public string LeftLabel { get; set; } = "TaskName";
            public string TaskLabel { get; set; } = "Progress";
            public string[] SearchFields { get; set; } = new string[] { "TaskName", "StartDate", "EndDate", "Duration", "Progress" };
            public Gantt.FilterHierarchyMode SearchHierarchyMode { get; set; } = Gantt.FilterHierarchyMode.Parent;
            public Operator SearchOperator { get; set; } = Operator.Contains;
            public bool AllowUnsort { get; set; } = false;
            public string SortField { get; set; } = "TaskName";
            public SortDirection SortDirection { get; set; } = SortDirection.Ascending;
            public bool AllowTaskbarDragAndDrop { get; set; } = false;
            public bool EnableMultiTaskbar { get; set; } = false;
            public int SlackValue { get; set; } = 0;
            public int DayWorkTimeFrom { get; set; } = 8;
            public int DayWorkTimeTo { get; set; } = 17;
            public bool ShowTooltipOnEditing { get; set; } = true;
            public int SplitterColumnIndex { get; set; } = -1;
            public int SplitterSeperatorSize { get; set; } = 4;
            public SplitterView SplitterView { get; set; } = SplitterView.Default;
            public bool IsSplitterCollapsible { get; set; } = false;
            public string SplitterMinimumWidth { get; set; } = "50px";
            public bool EnableSplitTask { get; set; } = false;
        }

        private void ApplyChanges()
        {
            // Call StateHasChanged to refresh the GanttChartBase with new properties
            StateHasChanged();
        }

        private void ClearMessageHandler()
        {
            ganttBaseInstance.ErrorMessage = string.Empty;
            ganttBaseInstance.EventMessage = string.Empty;
            StateHasChanged();
        }
        public async Task InvokeSelectedMethod(string methodName)
        {
            if (ganttChartInstance == null)
            {
                Console.WriteLine("Gantt chart instance is not initialized.");
                return;
            }

            switch (methodName)
            {
                case "AddPredecessor":
                    var recordId = ganttChartInstance.GetCurrentViewRecords().FirstOrDefault()?.TaskId.ToString();
                    var predecessorId = ganttChartInstance.GetCurrentViewRecords().Last().TaskId.ToString();
                    ganttChartInstance.AddPredecessor(recordId, $"{predecessorId} FS");
                    break;
                case "AddRecordAsync":
                    CustomTaskDataModel data = new CustomTaskDataModel()
                    {
                        TaskId = ganttChartInstance.DataSource.Count() + 1,
                        TaskName = "New Task",
                        StartDate = ganttChartInstance.DataSource.Min(rec => rec.StartDate),
                        EndDate = ganttChartInstance.DataSource.Min(rec => rec.StartDate.AddDays(3))
                    };
                    await ganttChartInstance.AddRecordAsync(data);
                    break;
                case "AddResourceAssignmentAsync":
                    // Add arguments and logic as required
                    AssignmentModel newResourceAssignment = new AssignmentModel()
                    {
                        Id = 17,
                        TaskId = 30,
                        ResourceId = 2,
                    };
                    await ganttChartInstance.AddResourceAssignmentAsync<AssignmentModel>(newResourceAssignment);
                    break;
                case "AutoFitColumnsAsync":
                    await ganttChartInstance.AutoFitColumnsAsync(new string[] { "TaskName", "Duration" });
                    break;
                case "CancelEdit":
                    ganttChartInstance.CancelEdit();
                    break;
                case "ClearFilteringAsync":
                    await ganttChartInstance.ClearFilteringAsync();
                    break;
                case "ClearSelectionAsync":
                    await ganttChartInstance.ClearSelectionAsync();
                    break;
                case "ClearSortingAsync":
                    await ganttChartInstance.ClearSortingAsync();
                    break;
                case "CollapseAllAsync":
                    await ganttChartInstance.CollapseAllAsync();
                    break;
                case "CollapseAtLevelAsync":
                    await ganttChartInstance.CollapseAtLevelAsync(0);
                    break;
                case "CollapseByKeyAsync":
                    await ganttChartInstance.CollapseByKeyAsync(ganttChartInstance.GetCurrentViewRecords()[0].TaskId.ToString());
                    break;
                case "CopyAsync":
                    await ganttChartInstance.CopyAsync(true);
                    break;
                case "DeleteRecordAsync":
                    var deleteRecord = (await ganttChartInstance.GetSelectedRecordsAsync())?.FirstOrDefault()?.TaskId.ToString() ?? ganttChartInstance.GetCurrentViewRecords()[1].TaskId.ToString();
                    await ganttChartInstance.DeleteRecordAsync(deleteRecord);
                    break;
                case "DeleteResourceAssignmentAsync":
                    AssignmentModel deleteResourceAssignment = new AssignmentModel()
                    {
                        Id = 17,
                        TaskId = 30,
                        ResourceId = 2,
                    };
                    await ganttChartInstance.DeleteResourceAssignmentAsync<AssignmentModel>(deleteResourceAssignment);
                    break;
                case "EnableItems":
                    ganttChartInstance.EnableItems(new List<int> { 0, 1 }, false);
                    break;
                case "ExpandAllAsync":
                    await ganttChartInstance.ExpandAllAsync();
                    break;
                case "ExpandAtLevelAsync":
                    await ganttChartInstance.ExpandAtLevelAsync(0);
                    break;
                case "ExpandByKeyAsync":
                    var expandRecord = (await ganttChartInstance.GetSelectedRecordsAsync())?.FirstOrDefault()?.TaskId.ToString() ?? ganttChartInstance.GetCurrentViewRecords()[1].TaskId.ToString();
                    await ganttChartInstance.ExpandByKeyAsync(expandRecord);
                    break;
                case "ExportToCsvAsync":
                    await ganttChartInstance.ExportToCsvAsync();
                    break;
                case "ExportToExcelAsync":
                    await ganttChartInstance.ExportToExcelAsync();
                    break;
                case "ExportToPdfAsync":
                    await ganttChartInstance.ExportToPdfAsync();
                    break;
                case "FilterByColumnAsync":
                    await ganttChartInstance.FilterByColumnAsync("TaskName", "startswith", "Product concept");
                    break;
                case "GetColumnIndexByFieldAsync":
                    valueFromMethods = await ganttChartInstance.GetColumnIndexByFieldAsync("TaskName");
                    break;
                case "GetColumnsAsync":
                    valueFromMethods = await ganttChartInstance.GetColumnsAsync();
                    break;
                case "GetCriticalTasksAsync":
                    valueFromMethods = ganttChartInstance.GetCriticalTasksAsync();
                    break;
                case "GetCurrentViewRecords":
                    valueFromMethods = ganttChartInstance.GetCurrentViewRecords();
                    break;
                case "GetFilteredRecordsAsync":
                    valueFromMethods = await ganttChartInstance.GetFilteredRecordsAsync();
                    break;
                case "GetPersistDataAsync":
                    valueFromMethods = await ganttChartInstance.GetPersistDataAsync();
                    break;
                case "GetResourceAssignments":
                    var selectedResourceAssignmentRecord = (await ganttChartInstance.GetSelectedRecordsAsync()).FirstOrDefault();
                    if (selectedResourceAssignmentRecord != null)
                    {
                        valueFromMethods = ganttChartInstance.GetResourceAssignments<AssignmentModel>(selectedResourceAssignmentRecord);
                    }
                    break;

                case "GetResources":
                    var selectedResourceRecord = (await ganttChartInstance.GetSelectedRecordsAsync()).FirstOrDefault();
                    if (selectedResourceRecord != null)
                    {
                        valueFromMethods = ganttChartInstance.GetResources<ResourceInfoModel>(selectedResourceRecord);
                    }
                    break;

                case "GetRowTaskModel":
                    var selectedTaskRecord = (await ganttChartInstance.GetSelectedRecordsAsync()).FirstOrDefault();
                    if (selectedTaskRecord != null)
                    {
                        valueFromMethods = ganttChartInstance.GetRowTaskModel(selectedTaskRecord);
                    }
                    break;

                case "GetSelectedRecordsAsync":
                    valueFromMethods = await ganttChartInstance.GetSelectedRecordsAsync();
                    break;
                case "GetSelectedRowCellIndexesAsync":
                    valueFromMethods = await ganttChartInstance.GetSelectedRowCellIndexesAsync();
                    break;
                case "GetSelectedRowIndexesAsync":
                    valueFromMethods = await ganttChartInstance.GetSelectedRowIndexesAsync();
                    break;
                case "HideColumnAsync":
                    await ganttChartInstance.HideColumnAsync("TaskName", "Task Name");
                    break;
                case "HideColumnsAsync":
                    await ganttChartInstance.HideColumnsAsync(new string[] { "TaskName" }, "Task Name");
                    break;
                case "HideSpinnerAsync":
                    await ganttChartInstance.HideSpinnerAsync();
                    break;
                case "IndentAsync":
                    await ganttChartInstance.IndentAsync();
                    break;
                case "MergeTaskAsync":
                    await ganttChartInstance.MergeTaskAsync("2", new List<ValueTuple<int, int>> { (0, 1) });
                    break;
                case "NextTimeSpan":
                    ganttChartInstance.NextTimeSpan();
                    break;
                case "OpenAddDialogAsync":
                    await ganttChartInstance.OpenAddDialogAsync();
                    break;
                case "OpenColumnChooser":
                    await ganttChartInstance.OpenColumnChooser(0, 0);
                    break;
                case "OpenEditDialogAsync":
                    var editDialogRecord = (await ganttChartInstance.GetSelectedRecordsAsync())?.FirstOrDefault()?.TaskId.ToString() ?? ganttChartInstance.GetCurrentViewRecords()[1].TaskId.ToString();
                    await ganttChartInstance.OpenEditDialogAsync(editDialogRecord);
                    break;
                case "OutdentAsync":
                    await ganttChartInstance.OutdentAsync();
                    break;
                case "PreviousTimeSpan":
                    ganttChartInstance.PreviousTimeSpan();
                    break;
                case "RefreshAsync":
                    await ganttChartInstance.RefreshAsync();
                    break;
                case "RefreshColumnsAsync":
                    await ganttChartInstance.RefreshColumnsAsync();
                    break;
                case "ReorderColumnsAsync":
                    await ganttChartInstance.ReorderColumnsAsync(new List<string> { "TaskId" }, "TaskName");
                    break;
                case "ReorderRowAsync":
                    await ganttChartInstance.ReorderRowAsync(0, 1, "Above");
                    break;
                case "ResetPersistDataAsync":
                    await ganttChartInstance.ResetPersistDataAsync();
                    break;
                case "ScrollIntoViewAsync":
                    await ganttChartInstance.ScrollIntoViewAsync();
                    break;
                case "ScrollToTaskbarAsync":
                    var scrollToTaskbarRecord = (await ganttChartInstance.GetSelectedRecordsAsync())?.FirstOrDefault()?.TaskId.ToString() ?? ganttChartInstance.GetCurrentViewRecords()[1].TaskId.ToString();
                    await ganttChartInstance.ScrollToTaskbarAsync(scrollToTaskbarRecord);
                    break;
                case "ScrollToTimelineAsync":
                    var scrollToDate = ganttChartInstance.GetCurrentViewRecords().Min(record => record.StartDate);
                    await ganttChartInstance.ScrollToTimelineAsync(scrollToDate);
                    break;
                case "SearchAsync":
                    var searchKey = ganttChartInstance.GetCurrentViewRecords()[1].TaskName;
                    await ganttChartInstance.SearchAsync("searchKey");
                    break;
                case "SelectCellAsync":
                    await ganttChartInstance.SelectCellAsync((0, 0), true);
                    break;
                case "SelectRowAsync":
                    await ganttChartInstance.SelectRowAsync(0, true);
                    break;
                case "SelectRowsAsync":
                    await ganttChartInstance.SelectRowsAsync(new int[] { 0, 1 });
                    break;
                case "SelectRowsByRangeAsync":
                    await ganttChartInstance.SelectRowsByRangeAsync(0, 1);
                    break;
                case "SetPersistDataAsync":
                    var properties = await ganttChartInstance.GetPersistDataAsync();
                    await ganttChartInstance.SetPersistDataAsync(properties);
                    break;
                case "SetSplitterPositionAsync":
                    await ganttChartInstance.SetSplitterPositionAsync("50");
                    break;
                case "ShowColumnAsync":
                    await ganttChartInstance.ShowColumnAsync("TaskName", "Name");
                    break;
                case "ShowColumnsAsync":
                    await ganttChartInstance.ShowColumnsAsync(new string[] { "TaskName" }, "Name");
                    break;
                case "ShowSpinnerAsync":
                    await ganttChartInstance.ShowSpinnerAsync();
                    break;
                case "SortByColumnAsync":
                    await ganttChartInstance.SortByColumnAsync("TaskName", SortDirection.Ascending);
                    break;
                case "SplitTaskAsync":
                    var splitRecord = ganttChartInstance.GetCurrentViewRecords()[1];
                    await ganttChartInstance.SplitTaskAsync(splitRecord.TaskId.ToString(), new List<DateTime> { splitRecord.StartDate.AddDays(1) });
                    break;
                case "UpdatePredecessor":
                    var predecessorRecord = ganttChartInstance.GetCurrentViewRecords()[1];
                    var predecessorString = ganttChartInstance.DataSource.Last().TaskId.ToString();
                    ganttChartInstance.UpdatePredecessor(predecessorRecord.TaskId.ToString(), predecessorString);
                    break;
                case "UpdateProjectDates":

                    ganttChartInstance.UpdateProjectDates(new DateTime(2021, 03, 01), new DateTime(2021, 07, 31));
                    break;
                case "UpdateRecordByIDAsync":
                    var updatedRecord = ganttChartInstance.GetCurrentViewRecords()[1];
                    updatedRecord.TaskName = "Updated Task";
                    await ganttChartInstance.UpdateRecordByIDAsync(updatedRecord);
                    break;
                case "UpdateResourceAssignmentAsync":
                    var updateResourceAssignmentRecord = new AssignmentModel() { Id = 3, TaskId = 4, ResourceId = 10 };
                    await ganttChartInstance.UpdateResourceAssignmentAsync<AssignmentModel>(updateResourceAssignmentRecord);
                    break;
                case "ZoomInAsync":
                    await ganttChartInstance.ZoomInAsync();
                    break;
                case "ZoomOutAsync":
                    await ganttChartInstance.ZoomOutAsync();
                    break;
                case "ZoomToFitAsync":
                    await ganttChartInstance.ZoomToFitAsync();
                    break;
                default:
                    Console.WriteLine($"Method '{methodName}' not found.");
                    break;
            }
        }
    }
}