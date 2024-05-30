using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BE_NexusEvents.Migrations
{
    /// <inheritdoc />
    public partial class ChangeDBschema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Events_Spaces_SpaceID",
                table: "Events");

            migrationBuilder.DropForeignKey(
                name: "FK_Events_Users_UserID",
                table: "Events");

            migrationBuilder.DropForeignKey(
                name: "FK_Reserves_Spaces_SpaceId",
                table: "Reserves");

            migrationBuilder.DropForeignKey(
                name: "FK_Reserves_Users_UserId",
                table: "Reserves");

            migrationBuilder.DropIndex(
                name: "IX_Reserves_SpaceId",
                table: "Reserves");

            migrationBuilder.DropIndex(
                name: "IX_Reserves_UserId",
                table: "Reserves");

            migrationBuilder.DropIndex(
                name: "IX_Events_SpaceID",
                table: "Events");

            migrationBuilder.DropIndex(
                name: "IX_Events_UserID",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "EndDate",
                table: "Reserves");

            migrationBuilder.DropColumn(
                name: "InitialDate",
                table: "Reserves");

            migrationBuilder.AddColumn<int>(
                name: "EventId",
                table: "Reserves",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EventId",
                table: "Reserves");

            migrationBuilder.AddColumn<DateTime>(
                name: "EndDate",
                table: "Reserves",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "InitialDate",
                table: "Reserves",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_Reserves_SpaceId",
                table: "Reserves",
                column: "SpaceId");

            migrationBuilder.CreateIndex(
                name: "IX_Reserves_UserId",
                table: "Reserves",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Events_SpaceID",
                table: "Events",
                column: "SpaceID");

            migrationBuilder.CreateIndex(
                name: "IX_Events_UserID",
                table: "Events",
                column: "UserID");

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Spaces_SpaceID",
                table: "Events",
                column: "SpaceID",
                principalTable: "Spaces",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Events_Users_UserID",
                table: "Events",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reserves_Spaces_SpaceId",
                table: "Reserves",
                column: "SpaceId",
                principalTable: "Spaces",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reserves_Users_UserId",
                table: "Reserves",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
