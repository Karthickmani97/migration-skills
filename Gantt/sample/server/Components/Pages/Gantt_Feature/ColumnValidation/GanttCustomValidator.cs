using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Syncfusion.Blazor.Gantt;
using Syncfusion.Blazor.Grids;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;
using System.Dynamic;
using System.Collections.Generic;

namespace ColumnValidationComponents
{
    public class GanttCustomValidator : ComponentBase, IDisposable
    {
        [Parameter] public ValidatorTemplateContext context { get; set; }
        [CascadingParameter] private EditContext CurrentEditContext { get; set; }
        private ValidationMessageStore _messageStore;
        private static readonly DateTime MinDate2020 = new DateTime(2020, 1, 1);
        private static DateTime MaxDateToday => DateTime.Today;
        private static readonly DateTime MaxDate2030 = new DateTime(2030, 12, 31);
        private static readonly EmailAddressAttribute EmailValidator = new EmailAddressAttribute();
        private static readonly Regex UsernameRegex = new Regex(@"^[a-zA-Z0-9_]*$", RegexOptions.Compiled);

        protected override void OnInitialized()
        {
            if (CurrentEditContext is null)
            {
                throw new InvalidOperationException($"{nameof(GanttCustomValidator)} requires a cascading EditContext.");
            }
            _messageStore = new ValidationMessageStore(CurrentEditContext);
            CurrentEditContext.OnValidationRequested += ValidateRequested;
            CurrentEditContext.OnFieldChanged += ValidateField;
        }

        public void Dispose()
        {
            if (CurrentEditContext is not null)
            {
                CurrentEditContext.OnValidationRequested -= ValidateRequested;
                CurrentEditContext.OnFieldChanged -= ValidateField;
            }
        }

        private void AddError(FieldIdentifier id, string message)
        {
            _messageStore.Add(id, message);
            context?.ShowValidationMessage(id.FieldName, false, message);
        }

        private void ClearField(FieldIdentifier id)
        {
            _messageStore.Clear(id);
            context?.ShowValidationMessage(id.FieldName, true, null);
        }

        private void HandleValidation(FieldIdentifier identifier)
        {
            // Existing strongly-typed validation (unchanged)
            if (identifier.Model is GanttData.TaskData task)
            {
                _messageStore.Clear(identifier);
                switch (identifier.FieldName)
                {
                    case nameof(GanttData.TaskData.TaskId):
                        if (task.TaskId <= 0)
                            AddError(identifier, "Task ID is required.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.ActivityName):
                        if (string.IsNullOrWhiteSpace(task.ActivityName))
                            AddError(identifier, "Task Name is required.");
                        else if (task.ActivityName.Length < 5 || task.ActivityName.Length > 10)
                            AddError(identifier, "Task Name must be between 5 and 10 characters.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.Duration):
                        ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.Predecessor):
                        ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.Progress):
                        if (!IsWithin(task.Progress, 5, 50))
                            AddError(identifier, "Progress must be between 5 and 50.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.Work):
                        if (!IsWithin(task.Work, 5, 200))
                            AddError(identifier, "Work must be between 5 and 200.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.Email):
                        if (string.IsNullOrWhiteSpace(task.Email))
                            AddError(identifier, "Email is required.");
                        else if (!EmailValidator.IsValid(task.Email))
                            AddError(identifier, "Invalid Email format.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.Username):
                        if (string.IsNullOrWhiteSpace(task.Username))
                            AddError(identifier, "Username is required.");
                        else if (!UsernameRegex.IsMatch(task.Username))
                            AddError(identifier, "Username can only contain letters, numbers, and underscores.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.Password):
                        if (string.IsNullOrWhiteSpace(task.Password))
                            AddError(identifier, "PassWord is required.");
                        else if (!string.IsNullOrEmpty(task.Password) && (task.Password.Length < 8 || task.Password.Length > 20))
                            AddError(identifier, "Password must be between 8 and 20 characters.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.Website):
                        if (string.IsNullOrWhiteSpace(task.Website))
                        {
                            AddError(identifier, "Website is required.");
                        }
                        else if (!TryValidateAbsoluteHttpUrl(task.Website))
                        {
                            AddError(identifier, "Invalid URL format.");
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(GanttData.TaskData.CustomData):
                        if (string.IsNullOrWhiteSpace(task.CustomData))
                            AddError(identifier, "Custom Data is required.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.Notes):
                        if (string.IsNullOrWhiteSpace(task.Notes))
                            AddError(identifier, "Notes is required.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.TaskType):
                        if (string.IsNullOrWhiteSpace(task.TaskType))
                            AddError(identifier, "Task Type is required.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(GanttData.TaskData.StartDate):
                        if (!ValidateDateInRange(identifier, task.StartDate, "Start Date", MinDate2020, MaxDateToday))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(GanttData.TaskData.EndDate):
                        if (!ValidateDateInRange(identifier, task.EndDate, "End Date", MinDate2020, MaxDateToday))
                        {
                        }
                        else
                        {
                            if (task.StartDate.HasValue && task.EndDate.HasValue && task.EndDate.Value.Date < task.StartDate.Value.Date)
                            {
                                AddError(identifier, "End Date cannot be earlier than the Start Date.");
                            }
                            else
                            {
                                ClearField(identifier);
                            }
                        }
                        break;

                    case nameof(GanttData.TaskData.BaselineStartDate):
                        if (!ValidateDateInRange(identifier, task.BaselineStartDate, "Baseline Start Date", MinDate2020, MaxDate2030))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(GanttData.TaskData.BaselineEndDate):
                        if (!ValidateDateInRange(identifier, task.BaselineEndDate, "Baseline End Date", MinDate2020, MaxDate2030))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(GanttData.TaskData.ReviewDate):
                        if (!ValidateDateInRange(identifier, task.ReviewDate, "Review Date", MinDate2020, MaxDateToday))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(GanttData.TaskData.ProjectBudget):
                        if (!ValidateBudget(identifier, task.ProjectBudget))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    default:
                        ClearField(identifier);
                        break;
                }
                return;
            }

            // ExpandoObject/IDictionary<string, object> validation (added without changing existing logic)
            if (identifier.Model is IDictionary<string, object> dyn)
            {
                _messageStore.Clear(identifier);
                var field = identifier.FieldName;

                switch (field)
                {
                    case "TaskId":
                        if (!TryGetInt(dyn, "TaskId", out var taskId) || taskId <= 0)
                            AddError(identifier, "Task ID is required.");
                        else
                            ClearField(identifier);
                        break;

                    case "ActivityName":
                        if (!TryGetString(dyn, "ActivityName", out var name) || string.IsNullOrWhiteSpace(name))
                            AddError(identifier, "Task Name is required.");
                        else if (name.Length < 5 || name.Length > 10)
                            AddError(identifier, "Task Name must be between 5 and 10 characters.");
                        else
                            ClearField(identifier);
                        break;

                    case "Duration":
                        // No validation per column rules
                        ClearField(identifier);
                        break;

                    case "Predecessor":
                        // No validation specified
                        ClearField(identifier);
                        break;

                    case "Progress":
                        if (!TryGetInt(dyn, "Progress", out var progress) || !IsWithin(progress, 5, 50))
                            AddError(identifier, "Progress must be between 5 and 50.");
                        else
                            ClearField(identifier);
                        break;

                    case "Work":
                        if (!TryGetInt(dyn, "Work", out var work) || !IsWithin(work, 5, 200))
                            AddError(identifier, "Work must be between 5 and 200.");
                        else
                            ClearField(identifier);
                        break;

                    case "Email":
                        if (!TryGetString(dyn, "Email", out var email) || string.IsNullOrWhiteSpace(email))
                            AddError(identifier, "Email is required.");
                        else if (!EmailValidator.IsValid(email))
                            AddError(identifier, "Invalid Email format.");
                        else
                            ClearField(identifier);
                        break;

                    case "Username":
                        if (!TryGetString(dyn, "Username", out var username) || string.IsNullOrWhiteSpace(username))
                            AddError(identifier, "Username is required.");
                        else if (!UsernameRegex.IsMatch(username))
                            AddError(identifier, "Username can only contain letters, numbers, and underscores.");
                        else
                            ClearField(identifier);
                        break;

                    case "Password":
                        if (!TryGetString(dyn, "Password", out var password) || string.IsNullOrWhiteSpace(password))
                            AddError(identifier, "PassWord is required.");
                        else if (!string.IsNullOrEmpty(password) && (password.Length < 8 || password.Length > 20))
                            AddError(identifier, "Password must be between 8 and 20 characters.");
                        else
                            ClearField(identifier);
                        break;

                    case "Website":
                        if (!TryGetString(dyn, "Website", out var website) || string.IsNullOrWhiteSpace(website))
                            AddError(identifier, "Website is required.");
                        else if (!TryValidateAbsoluteHttpUrl(website))
                            AddError(identifier, "Invalid URL format.");
                        else
                            ClearField(identifier);
                        break;

                    case "CustomData":
                        if (!TryGetString(dyn, "CustomData", out var custom) || string.IsNullOrWhiteSpace(custom))
                            AddError(identifier, "Custom Data is required.");
                        else
                            ClearField(identifier);
                        break;

                    case "Notes":
                        if (!TryGetString(dyn, "Notes", out var notes) || string.IsNullOrWhiteSpace(notes))
                            AddError(identifier, "Notes is required.");
                        else
                            ClearField(identifier);
                        break;

                    case "TaskType":
                        if (!TryGetString(dyn, "TaskType", out var taskType) || string.IsNullOrWhiteSpace(taskType))
                            AddError(identifier, "Task Type is required.");
                        else
                            ClearField(identifier);
                        break;

                    case "StartDate":
                        if (!TryGetDate(dyn, "StartDate", out var sDate) ||
                            !ValidateDateInRange(identifier, sDate, "Start Date", MinDate2020, MaxDateToday))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case "EndDate":
                        if (!TryGetDate(dyn, "EndDate", out var eDate) ||
                            !ValidateDateInRange(identifier, eDate, "End Date", MinDate2020, MaxDateToday))
                        {
                        }
                        else
                        {
                            // Cross-field validation with StartDate
                            TryGetDate(dyn, "StartDate", out var startDateForCompare);
                            if (startDateForCompare.HasValue && eDate.HasValue && eDate.Value.Date < startDateForCompare.Value.Date)
                                AddError(identifier, "End Date cannot be earlier than the Start Date.");
                            else
                                ClearField(identifier);
                        }
                        break;

                    case "BaselineStartDate":
                        if (!TryGetDate(dyn, "BaselineStartDate", out var bStart) ||
                            !ValidateDateInRange(identifier, bStart, "Baseline Start Date", MinDate2020, MaxDate2030))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case "BaselineEndDate":
                        if (!TryGetDate(dyn, "BaselineEndDate", out var bEnd) ||
                            !ValidateDateInRange(identifier, bEnd, "Baseline End Date", MinDate2020, MaxDate2030))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case "ReviewDate":
                        if (!TryGetDate(dyn, "ReviewDate", out var rDate) ||
                            !ValidateDateInRange(identifier, rDate, "Review Date", MinDate2020, MaxDateToday))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case "ProjectBudget":
                        if (!TryGetDecimal(dyn, "ProjectBudget", out var budget) || !ValidateBudget(identifier, budget))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    default:
                        ClearField(identifier);
                        break;
                }

                return;
            }
            if (identifier.Model is TaskData taskdata)
            {
                _messageStore.Clear(identifier);
                switch (identifier.FieldName)
                {
                    case nameof(TaskData.TaskId):
                        if (taskdata.TaskId <= 0)
                            AddError(identifier, "Task ID is required.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.ActivityName):
                        if (string.IsNullOrWhiteSpace(taskdata.ActivityName))
                            AddError(identifier, "Task Name is required.");
                        else if (taskdata.ActivityName.Length < 5 || taskdata.ActivityName.Length > 10)
                            AddError(identifier, "Task Name must be between 5 and 10 characters.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.Duration):
                        ClearField(identifier);
                        break;

                    case nameof(TaskData.Predecessor):
                        ClearField(identifier);
                        break;

                    case nameof(TaskData.Progress):
                        if (!IsWithin(taskdata.Progress, 5, 50))
                            AddError(identifier, "Progress must be between 5 and 50.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.Work):
                        if (!IsWithin(taskdata.Work, 5, 200))
                            AddError(identifier, "Work must be between 5 and 200.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.Email):
                        if (string.IsNullOrWhiteSpace(taskdata.Email))
                            AddError(identifier, "Email is required.");
                        else if (!EmailValidator.IsValid(taskdata.Email))
                            AddError(identifier, "Invalid Email format.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.Username):
                        if (string.IsNullOrWhiteSpace(taskdata.Username))
                            AddError(identifier, "Username is required.");
                        else if (!UsernameRegex.IsMatch(taskdata.Username))
                            AddError(identifier, "Username can only contain letters, numbers, and underscores.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.Password):
                        if (string.IsNullOrWhiteSpace(taskdata.Password))
                            AddError(identifier, "PassWord is required.");
                        else if (!string.IsNullOrEmpty(taskdata.Password) && (taskdata.Password.Length < 8 || taskdata.Password.Length > 20))
                            AddError(identifier, "Password must be between 8 and 20 characters.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.Website):
                        if (string.IsNullOrWhiteSpace(taskdata.Website))
                        {
                            AddError(identifier, "Website is required.");
                        }
                        else if (!TryValidateAbsoluteHttpUrl(taskdata.Website))
                        {
                            AddError(identifier, "Invalid URL format.");
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(TaskData.CustomData):
                        if (string.IsNullOrWhiteSpace(taskdata.CustomData))
                            AddError(identifier, "Custom Data is required.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.Notes):
                        if (string.IsNullOrWhiteSpace(taskdata.Notes))
                            AddError(identifier, "Notes is required.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.TaskType):
                        if (string.IsNullOrWhiteSpace(taskdata.TaskType))
                            AddError(identifier, "Task Type is required.");
                        else
                            ClearField(identifier);
                        break;

                    case nameof(TaskData.StartDate):
                        if (!ValidateDateInRange(identifier, taskdata.StartDate, "Start Date", MinDate2020, MaxDateToday))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(TaskData.EndDate):
                        if (!ValidateDateInRange(identifier, taskdata.EndDate, "End Date", MinDate2020, MaxDateToday))
                        {
                        }
                        else
                        {
                            if (taskdata.StartDate.HasValue && taskdata.EndDate.HasValue && taskdata.EndDate.Value.Date < taskdata.StartDate.Value.Date)
                            {
                                AddError(identifier, "End Date cannot be earlier than the Start Date.");
                            }
                            else
                            {
                                ClearField(identifier);
                            }
                        }
                        break;

                    case nameof(TaskData.BaselineStartDate):
                        if (!ValidateDateInRange(identifier, taskdata.BaselineStartDate, "Baseline Start Date", MinDate2020, MaxDate2030))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(TaskData.BaselineEndDate):
                        if (!ValidateDateInRange(identifier, taskdata.BaselineEndDate, "Baseline End Date", MinDate2020, MaxDate2030))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(TaskData.ReviewDate):
                        if (!ValidateDateInRange(identifier, taskdata.ReviewDate, "Review Date", MinDate2020, MaxDateToday))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    case nameof(TaskData.ProjectBudget):
                        if (!ValidateBudget(identifier, taskdata.ProjectBudget))
                        {
                        }
                        else
                        {
                            ClearField(identifier);
                        }
                        break;

                    default:
                        ClearField(identifier);
                        break;
                }
                return;
            }
            // Unknown model type
            ClearField(identifier);
        }

        private static bool IsWithin(int value, int min, int max) => value >= min && value <= max;

        private bool ValidateDateInRange(FieldIdentifier id, DateTime? value, string label, DateTime min, DateTime max)
        {
            if (!value.HasValue)
            {
                AddError(id, $"{label} is required.");
                return false;
            }
            var dateOnly = value.Value.Date;
            if (dateOnly < min || dateOnly > max)
            {
                var maxText = max == MaxDate2030 ? "31-Dec-2030" : "today";
                AddError(id, $"{label} must be between 01-Jan-2020 and {maxText}.");
                return false;
            }
            return true;
        }

        private bool ValidateBudget(FieldIdentifier id, decimal amount)
        {
            if (amount == default)
            {
                AddError(id, "Project Budget is required.");
                return false;
            }
            if (amount < 100m || amount > 1_000_000m)
            {
                AddError(id, "Project Budget must be between $100 and $1,000,000.");
                return false;
            }
            return true;
        }

        private static bool TryValidateAbsoluteHttpUrl(string url)
        {
            if (!Uri.TryCreate(url, UriKind.Absolute, out var uri))
                return false;
            return uri.Scheme == Uri.UriSchemeHttp || uri.Scheme == Uri.UriSchemeHttps;
        }

        private void ValidateField(object sender, FieldChangedEventArgs e)
        {
            HandleValidation(e.FieldIdentifier);
        }

        private void ValidateRequested(object sender, ValidationRequestedEventArgs e)
        {
            _messageStore.Clear();
            string[] fieldsToValidate = new[]
            {
                nameof(GanttData.TaskData.TaskId),
                nameof(GanttData.TaskData.ActivityName),
                nameof(GanttData.TaskData.Progress),
                nameof(GanttData.TaskData.Work),
                nameof(GanttData.TaskData.Email),
                nameof(GanttData.TaskData.Username),
                nameof(GanttData.TaskData.Password),
                nameof(GanttData.TaskData.Website),
                nameof(GanttData.TaskData.CustomData),
                nameof(GanttData.TaskData.Notes),
                nameof(GanttData.TaskData.TaskType),
                nameof(GanttData.TaskData.StartDate),
                nameof(GanttData.TaskData.EndDate),
                nameof(GanttData.TaskData.BaselineStartDate),
                nameof(GanttData.TaskData.BaselineEndDate),
                nameof(GanttData.TaskData.ReviewDate),
                nameof(GanttData.TaskData.ProjectBudget)
            };
            foreach (var field in fieldsToValidate)
            {
                HandleValidation(CurrentEditContext.Field(field));
            }
        }

        // Helpers for ExpandoObject
        private static bool TryGetString(IDictionary<string, object> d, string key, out string value)
        {
            value = null;
            if (!d.TryGetValue(key, out var o) || o is null) return false;
            value = o as string ?? o.ToString();
            return true;
        }

        private static bool TryGetInt(IDictionary<string, object> d, string key, out int value)
        {
            value = default;
            if (!d.TryGetValue(key, out var o) || o is null) return false;
            try
            {
                if (o is int i) { value = i; return true; }
                if (o is long l) { value = (int)l; return true; }
                if (o is short s) { value = s; return true; }
                if (o is double db) { value = (int)db; return true; }
                if (o is float fl) { value = (int)fl; return true; }
                if (o is decimal dc) { value = (int)dc; return true; }
                if (int.TryParse(o.ToString(), out var parsed)) { value = parsed; return true; }
            }
            catch { }
            return false;
        }

        private static bool TryGetDecimal(IDictionary<string, object> d, string key, out decimal value)
        {
            value = default;
            if (!d.TryGetValue(key, out var o) || o is null) return false;
            try
            {
                if (o is decimal dec) { value = dec; return true; }
                if (o is double db) { value = (decimal)db; return true; }
                if (o is float fl) { value = (decimal)fl; return true; }
                if (o is int i) { value = i; return true; }
                if (o is long l) { value = l; return true; }
                if (decimal.TryParse(o.ToString(), out var parsed)) { value = parsed; return true; }
            }
            catch { }
            return false;
        }

        private static bool TryGetDate(IDictionary<string, object> d, string key, out DateTime? value)
        {
            value = null;
            if (!d.TryGetValue(key, out var o) || o is null) return false;
            if (o is DateTime dt) { value = dt; return true; }
            if (o is DateTimeOffset dto) { value = dto.DateTime; return true; }
            if (DateTime.TryParse(o.ToString(), out var parsed)) { value = parsed; return true; }
            return false;
        }
    }
}