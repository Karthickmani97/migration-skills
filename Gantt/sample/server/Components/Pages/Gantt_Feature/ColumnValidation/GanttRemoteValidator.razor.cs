using Syncfusion.Blazor.Gantt;

namespace ColumnValidationGanttRemoteData
{

        public class TaskData
        {
            public int Id { get; set; }
            public string Name { get; set; } = string.Empty;
            public DateTime StartDate { get; set; }
            public DateTime EndDate { get; set; }
            public int DurationInDays { get; set; }
            public int CompletionPercent { get; set; }
            public int? ParentTaskId { get; set; }
            public string Dependency { get; set; } = string.Empty;
        }
}
