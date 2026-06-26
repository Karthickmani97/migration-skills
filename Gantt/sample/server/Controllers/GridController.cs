using Microsoft.AspNetCore.Mvc;
using Syncfusion.Blazor.Data;
using Syncfusion.Blazor;
using SyncfusionBlazorApp.Models;
using System.Threading.Tasks;
using System;

namespace SyncfusionBlazorApp.Controllers
{    
    public class GridController : ControllerBase
    {
        /// <summary>
        /// Retrieve data from the data source.
        /// </summary>
        /// <returns>Returns a list of ordersdetails records.</returns>
        [HttpGet]
        [Route("api/[controller]")]
        public List<OrdersDetails> GetOrderData()
        {
            //return List<OrdersDetails>();
            return OrdersDetails.GetAllRecords().ToList();
        }

        /// <summary>
        /// Handles server-side data operations such as searching, filtering, sorting, paging, and returns the processed data.
        /// </summary>
        /// <param name="DataManagerRequest">The request object contains data operation parameters such as search, filter, sort, and pagination details.</param>
        /// <returns>Returns a response containing the processed data and the total record count.</returns>
        [HttpPost]
        [Route("api/[controller]")]
        public object Post([FromBody] DataManagerRequest DataManagerRequest)
        {
            // Retrieve data from the data source (e.g., database).
            IQueryable<OrdersDetails> DataSource = DataManagerRequest.Where != null ? OrdersDetails.GetRecords().AsQueryable() : GetOrderData().AsQueryable();    

            // Handling searching operation.
            if (DataManagerRequest.Search != null && DataManagerRequest.Search.Count > 0)
            {
                DataSource = DataOperations.PerformSearching(DataSource, DataManagerRequest.Search);
                // Add custom logic here if needed and remove above method.
            }

            // Handling filtering operation.
            //if (DataManagerRequest.Where != null && DataManagerRequest.Where.Count > 0)
            //{
            //    foreach (var condition in DataManagerRequest.Where)
            //    {
            //        foreach (var predicate in condition.predicates)
            //        {
            //            DataSource = DataOperations.PerformFiltering(DataSource, DataManagerRequest.Where, predicate.Operator);
            //            // Add custom logic here if needed and remove above method.
            //        }
            //    }                
            //}

            if (DataManagerRequest.Where != null && DataManagerRequest.Where[0] != null && DataManagerRequest.Where[0].Operator != null && DataManagerRequest.Where.Count > 0) //Filtering
            {
                DataSource = DataOperations.PerformFiltering(DataSource, DataManagerRequest.Where, DataManagerRequest.Where[0].Operator);
            }

            // Handling sorting operation.
            if (DataManagerRequest.Sorted != null && DataManagerRequest.Sorted.Count > 0)
            {
                DataSource = DataOperations.PerformSorting(DataSource, DataManagerRequest.Sorted);
                // Add custom logic here if needed and remove above method.
            }

            // Get the total records count.
            int totalRecordsCount = DataSource.Count();

            // Handling paging operation.
            if (DataManagerRequest.Skip != 0)
            {
                DataSource = DataOperations.PerformSkip(DataSource, DataManagerRequest.Skip);
                // Add custom logic here if needed and remove above method.
            }
            if (DataManagerRequest.Take != 0)
            {
                DataSource = DataOperations.PerformTake(DataSource, DataManagerRequest.Take);
                // Add custom logic here if needed and remove above method.
            }

            // Return data based on the request.
            return new { result = DataSource, count = totalRecordsCount };
        }

        /// <summary>
        /// Inserts a new data item into the data collection.
        /// </summary>
        /// <param name="value">It contains the new record detail which is need to be inserted.</param>
        /// <returns>Returns void.</returns>
        [HttpPost]
        [Route("api/[controller]/Insert")]
        public void Insert([FromBody] CRUDModel<OrdersDetails> newRecord)
        {
            if (newRecord.value != null)
            {
                // Add the new record to the data collection.
                OrdersDetails.GetAllRecords().Insert(0, newRecord.value);
            }
        }

        /// <summary>
        /// Update a existing data item from the data collection.
        /// </summary>
        /// <param name="updatedRecord">It contains the updated record detail which is need to be updated.</param>
        /// <returns>Returns void.</returns>
        [HttpPost]
        [Route("api/[controller]/Update")]
        public void Update([FromBody] CRUDModel<OrdersDetails> updatedRecord)
        {
            var updatedOrder = updatedRecord.value;
            if (updatedOrder != null)
            {
                var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.TaskID == updatedOrder.TaskID);
                if (data != null)
                {
                    // Update the existing record.
                    data.TaskName = updatedOrder.TaskName;
                    data.StartDate = updatedOrder.StartDate;
                    data.EndDate = updatedOrder.EndDate;
                    data.Duration = updatedOrder.Duration;
                    data.Progress = updatedOrder.Progress;
                    // Update other properties similarly.
                }
            }
        }

        /// <summary>
        /// Remove a specific data item from the data collection.
        /// </summary>
        /// <param name="deletedRecord">It contains the specific record detail which is need to be removed.</param>
        /// <return>Returns void.</return>
        [HttpPost]
        [Route("api/[controller]/Remove")]
        public void Remove([FromBody] CRUDModel<OrdersDetails> deletedRecord)
        {
            // Get the key value from the deletedRecord.
            int TaskID = int.Parse(deletedRecord.key.ToString());
            var data = OrdersDetails.GetAllRecords().FirstOrDefault(orderData => orderData.TaskID == TaskID);
            if (data != null)
            {
                // Remove the record from the data collection.
                OrdersDetails.GetAllRecords().Remove(data);
            }
        }

        /// <summary>
        /// Handles CRUD operations when batch editing is enabled in the DataGrid.
        /// </summary>
        /// <param name="batchModel">The batch model containing the data changes to be processed.</param>
        /// <returns>Returns the result of the CRUD operation.</returns>
        [HttpPost]
        [Route("api/[controller]/BatchUpdate")]
        public IActionResult BatchUpdate([FromBody] CRUDModel<OrdersDetails> batchModel)
        {
            // Check if there are any added records in the batch model.
            if (batchModel.added != null)
            {
                // Iterate through each added record.
                foreach (var Record in batchModel.added)
                {
                    // Insert the added record at the beginning of the existing records.
                    OrdersDetails.GetAllRecords().Insert(0, Record);
                }
            }
            // Check if there are any changed records in the batch model.
            if (batchModel.changed != null)
            {
                // Iterate through each changed record.
                foreach (var changedOrder in batchModel.changed)
                {
                    var updatedOrder = changedOrder;
                    if (updatedOrder != null)
                    {
                        var data = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.TaskID == updatedOrder.TaskID);
                        if (data != null)
                        {
                            // Update the existing record.
                            data.TaskName = updatedOrder.TaskName;
                            data.StartDate = updatedOrder.StartDate;
                            data.EndDate = updatedOrder.EndDate;
                            data.Duration = updatedOrder.Duration;
                            data.Progress = updatedOrder.Progress;
                            // Update other properties similarly.
                        }
                    }
                }
            }
            // Check if there are any deleted records in the batch model.
            if (batchModel.deleted != null)
            {
                // Iterate through each deleted record.
                foreach (var deletedOrder in batchModel.deleted)
                {
                    // Find the existing record that matches the deleted record's OrderID.
                    var orderToDelete = OrdersDetails.GetAllRecords().FirstOrDefault(or => or.TaskID == deletedOrder.TaskID);
                    if (orderToDelete != null)
                    {
                        // Remove the matching record from the existing records.
                        OrdersDetails.GetAllRecords().Remove(orderToDelete);
                    }
                }
            }

            // Return the updated batch model as a JSON result.
            return new JsonResult(batchModel);
        }

        public class CRUDModel<T> where T : class
        {
            public string? action { get; set; }
            public string? keyColumn { get; set; }
            public object? key { get; set; }
            public T? value { get; set; }
            public List<T>? added { get; set; }
            public List<T>? changed { get; set; }
            public List<T>? deleted { get; set; }
            public IDictionary<string, object>? @params { get; set; }
        }
    }
}
